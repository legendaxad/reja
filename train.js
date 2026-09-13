// E-TASK



// const getReverse = (str) => {
//       let i = 0;
//       splitted_word = str.split("")
//       console.log(splitted_word);

//       let reversed_word = []
//       for (i; i < splitted_word.length; i++) {
//             reversed_word.unshift(splitted_word[i])
//       }
//       return reversed_word.join("")
// }

// console.log(getReverse("axad"))

// const getReverse = (str) => {
//       return str.split("").reverse().join("")
// }
// console.log(getReverse("axad"));

// F TASK

// const findDoublers = (word) => {
//   const sorted = word.split("").sort();
//   let i = 0
//   for (i; i < sorted.length - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return true;
//     }
//   }

//   return false;
// };
// console.log(findDoublers("axdd"))



//D-Task


// const moment = require("moment");

// class Shop {
//   constructor(shashlik, beshbarmaq, moxito) {
//     this.shashlik = shashlik;
//     this.beshbarmaq = beshbarmaq;
//     this.moxito = moxito;
//   }
//   qoldiq() {
//     const time = moment()
//     const soat = time.format("HH");
//     const minute = time.format("mm");

//     console.log(
//       `Hozir ${soat}:${minute} da ${this.shashlik} ta shashlik, ${this.beshbarmaq} ta beshbarmaq va ${this.moxito} ta moxito bor!`
//     );
//   };
//   sotish(product, count) {
//     if (product in this) {

//       if (this[product] >= count) {
//         this[product] -= count;
//         console.log(`Sotildi: ${count} ta ${product}`);
//       } else {
//         console.log(`Kechirasiz yetarlicha mavjud emas bizada hozir ${this[product]} ta bor.`);
//       }
//     } else {
//       console.log(`Bunday mahsulot mavjud emas: ${product}`);
//     }
//   }
//   qabul(product, count) {
//     if (product in this) {
//       this[product] += count;
//       console.log(`Qabul qilindi: ${count} ta ${product}`);
//     } else {
//       console.log(`Bunday mahsulot mavjud emas: ${product}`);
//     }

//   }


// }
// const shop = new Shop(10, 3, 2)
// shop.qoldiq()
// shop.sotish("shashlik", 22)
// shop.qabul("beshbarmaq", 4)
// shop.qoldiq()
// //C -task

// const checkContent = (first, second) => {
//   const split_first = first.split("")
//   const split_second = second.split("")
//   let count = 0
//   if (split_first.length === split_second.length) {
//     split_first.map((i) => {
//       if (split_second.includes(i)) {
//         count++
//       }
//     })
//     return count === split_first.length
//   }
//   else return false
// }
// console.log(checkContent("axa", "daxa"));




//B-TASK

// const countDigit = (word) => {
//   let count = 0;
//   const splited = word.split("");
//   const digits = "0123456789";
//   splited.map((i) => {
//     if (digits.includes(i)) {
//       count += 1;
//     }
//   });
//   return count;
// };
// console.log(countDigit("banana12sss233"));

// A-TASK:

// const countLetter = (alpha, word) => {
//   let i = 0;
//   count = 0;
//   for (i; i < word.length; i++) {
//     if (word[i] === alpha) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countLetter("a", "banana"));

// const countLetter = (alpha, word) => {
//   let count = 0;
//   const splited = word.split("");
//   splited.map((i) => {
//     if (i === alpha) {
//       count += 1;
//     }
//   });
//   return count;
// };
// console.log(countLetter("a", "banana"));

// const countLetter = (alpha, word) => {
//   let count = 0;
//   for (const i of word) {
//     if (i === alpha) {
//       count = count + 1;
//     }
//   }
//   return count;
// };
// console.log(countLetter("a", "banana"));

//NodeJs event loop va CallBack functions
// const list = [
//   "yaxshi talaba boling",
//   "togri boshliq tanlang va koproq hato qiling",
//   "uzingizni ishlashingizni boshlang",
//   "siz kuchli bolgan narsani qiling",
//   "yoshlarga investitsiya qiling",
//   "endi dam oling, foydasi yoq endi",
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert number!", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");

// maslahatBering(77, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("passed here 1");

//Asynchronous funtions

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert number!", null);
//   else if (a <= 20) return (null, list[0]);
//   else if (a > 20 && a <= 30) return (null, list[1]);
//   else if (a > 30 && a <= 40) return (null, list[2]);
//   else if (a > 40 && a <= 50) return (null, list[3]);
//   else if (a > 50 && a <= 60) return (null, list[4]);
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

//call via then/catch

// console.log("passed here 0");

// maslahatBering(33)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("passed here 1");

//call via asyn/await
// async function run() {
//   let javob = await maslahatBering(27);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(71);
//   console.log(javob);
//   javob = await maslahatBering(51);
//   console.log(javob);
// }
// run();
