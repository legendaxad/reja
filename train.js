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
