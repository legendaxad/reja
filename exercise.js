// const findLetter = (letter, word) => {
//   count = 0;
//   for (i of word) {
//     if (i === letter) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(findLetter("N", "ANANAS"));

// const findLetter = (letter, word) => {
//   let i = 0;
//   count = 0;
//   for (i; i < word.length; i++) {
//     const lower = word.toLowerCase();
//     console.log(lower);

//     if (lower[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(findLetter("a", "ANANAS"));

//find all vowels
// const vowel = ["a", "e", "i", "o", "u"];
// const countVowel = (word) => {
//   let count = 0;
//   const lowered = word.toLowerCase();
//   lowered.split("").forEach((element) => {
//     if (vowel.includes(element)) {
//       count++;
//     }
//   });

//   return count;
// };
// console.log(countVowel("axAdjon"));

//reverse

// const reversing = (word) => {
//   const splitted = word.split("");
//   const a = splitted.reverse().join("");
//   console.log(a);
// };
// reversing("axad");

// const reversing = (word) => {
//   let result = [];

//   for (let i of word) {
//     result.unshift(i);
//   }
//   return result.join("");
// };
// console.log(reversing("axad"));

// const longest_word = (word) => {
//   let longest = "";
//   let i = 0;
//   const splitted = word.split(" ");
//   for (i; i < splitted.length; i++) {
//     const current_word = splitted[i];
//     if (current_word.length > longest.length) {
//       longest = current_word;
//     }
//   }
//   return longest;
// };
// console.log(longest_word("my name is AXADDDD"));

// const no_space = (word) => {
//   let result = "";
//   let i = 0;
//   const splitted = word.split("");
//   console.log(splitted);

//   for (i; i < splitted.length; i++) {
//     if (splitted[i] != " ") {
//       result = result + splitted[i];
//     }
//   }
//   return result;
// };
// console.log(no_space("my name is AXADDDD"));

// const sumArray = (number) => {
//   let sum = 0;
//   for (let i of number) {
//     sum = sum + i;
//   }
//   return sum;
// };
// console.log(sumArray([1, 2, 3, 4, 5]));

// const max_value = (number) => {
//   let max = number[0];
//   for (let i of number) {
//     if (i > max) {
//       max = i;
//     }
//   }
//   return max;
// };
// console.log(max_value([-5, -2, -10, -1]));

// const countEven = (number) => {
//   let result = 0;
//   for (let i of number) {
//     if (i % 2 === 0) {
//       result++;
//     }
//   }
//   return result;
// };
// console.log(countEven([1, 2, 4, 7, 8, 11]));

// const removeDuplicates = (number) => {
//   const result = [];
//   for (let i of number) {
//     if (!result.includes(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// const findElement = (lists, item) => {
//   for (let list of lists) {
//     if (list === item) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(findElement(["apple", "banana", "orange"], "melon"));
