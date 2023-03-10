//--------- 01. Ages

// function determinePersonType(age) {
//   let result ="out of bounds";

//   if (age >= 0 && age <= 2) {
//     result = "baby";
//   } else if (age >= 3 && age <= 13) {
//     result = "child";
//   } else if (age >= 14 && age <= 19) {
//     result = "teenager";
//   } else if (age >= 20 && age <= 65) {
//     result = "adult";
//   } else if (age >= 66) {
//     result = "elder";
//   }

//   console.log(result);
// }

// determinePersonType(20);
// determinePersonType(-10);

//--------- 02. Vacation

// function calculateVacation(number, groupType, day) {
//   let singlePrice;
//   let finalPrice;
//   let total;

//   if (day === "Friday") {
//     if (groupType === "Students") {
//       singlePrice = 8.45;
//     } else if (groupType === "Business") {
//       singlePrice = 10.9;
//     } else if (groupType === "Regular") {
//       singlePrice = 15;
//     }
//   } else if (day === "Saturday") {
//     if (groupType === "Students") {
//       singlePrice = 9.8;
//     } else if (groupType === "Business") {
//       singlePrice = 15.6;
//     } else if (groupType === "Regular") {
//       singlePrice = 20;
//     }
//   } else if (day === "Sunday") {
//     if (groupType === "Students") {
//       singlePrice = 10.46;
//     } else if (groupType === "Business") {
//       singlePrice = 16;
//     } else if (groupType === "Regular") {
//       singlePrice = 22.5;
//     }
//   }

//   total = number * singlePrice;

//   if (groupType === "Students") {
//     if (number >= 30) {
//       finalPrice = total - (total * 15) / 100;
//     } else {
//       finalPrice = total;
//     }
//   }

//   if (groupType === "Business") {
//     if (number >= 100) {
//       finalPrice = (number - 10) * singlePrice;
//     } else {
//       finalPrice = total;
//     }
//   }

//   if (groupType === "Regular") {
//     if (number >= 10 && number <= 20) {
//       finalPrice = total - (total * 5) / 100;
//     } else {
//       finalPrice = total;
//     }
//   }

//   console.log(`Total price: ${(finalPrice.toFixed(2))}`);
// }

// calculateVacation(30, "Students", "Sunday");

//--------- 03. Leap Year

// function isYearLeap(year) {
//   let result;

//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
//     result = "yes";
//   } else {
//     result = "no";
//   }

//   console.log(result);
// }

// isYearLeap(2003);

//--------- 04. Print And Sum

// function printAndSum(first, last) {
//   let array = [];
//   let sum=0;

//   for (let i = first; i <= last; i++) {
//     array.push(i);
//     sum += i;
//   }

//   console.log(array.join(" "));
//   console.log(`Sum: ${sum}`);
// }

// printAndSum(5, 10);

//--------- 05. Multiplication Table

// function multiplicationTable(number){

//     for(let i=1; i<=10;i++){
//         console.log(`${number} X ${i} = ${number*i}`);
//     }

// }

// multiplicationTable(5);

//--------- 06. Sum Digits

// function sumDigits(number) {

//   let single;
//   let sum = 0;
//   let numberLength = number.toString().length;

//   for (let i=numberLength; i>=0;i--) {
//     let num = number.toString().substring(0,i);
//     single =  Number(num)% 10;
//     sum = sum+single;
//   }
//   console.log(sum);
// }

// sumDigits(97561);

//--------- 07. Chars to String

// function charsToString(char1, char2, char3){

//     let resultString = char1.concat(char2.concat(char3));

//     console.log(resultString);
// }

// charsToString('a', 'b', 'c');

//--------- 08. Reversed Chars

// function reverseChars(char1, char2, char3){
//      let resultString = char3.concat(" ").concat(char2).concat(" ").concat(char1);

//     console.log(resultString);
// }

// reverseChars('A','B','C');

//--------- 09. Fruit

// function calculateMoney(fruit, weight, price){

//     let kilograms =weight/1000;
//     let totalAmount = kilograms*price;

//     console.log(`I need $${totalAmount.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
// }

// calculateMoney('orange', 2500, 1.80);

//--------- 10. Same Numbers

// function calculateSameNumbers(number){
//   let single;
//   let sum = 0;
//   let numberLength = number.toString().length;
//   let arr=[];

//   for (let i=numberLength; i>=0;i--) {
//     let num = number.toString().substring(0,i);
//     single =  Number(num)% 10;
//     sum = sum+single;
//     if (i!==0){
//         arr.push(single);
//     }
//   }

//   const allEqual = arr => arr.every(val => val === arr[0]);

//   let result = allEqual(arr);

//   console.log(result);
//   console.log(sum);
// }

// calculateSameNumbers(2222222);

//--------- 11. Road Radar

// function driving(speed, area) {
//   let limit;
//   let message;
//   let status;

//   switch (area) {
//     case "city":
//       limit = 50;
//       break;
//     case "motorway":
//       limit = 130;
//       break;
//     case "interstate":
//       limit = 90;
//       break;
//     case "residential":
//       limit = 20;
//       break;
//   }

//   if (speed <= limit) {
//     message = `Driving ${speed} km/h in a ${limit} zone`;
//   } else if (speed > limit) {

//     if (speed - limit <= 20) {
//       status = "speeding";
//     } else

//     if (speed - limit <= 40) {
//         status = "excessive speeding";
//       } else {
//         status = "reckless driving";
//       }

//     message = `The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`;
//   }
//   console.log(message);
// }

// driving(120, 'interstate');

//--------- 12. Cooking by Numbers

// function coockingByNumbers(number, op1, op2, op3, op4, op5) {
//   let operationsList = [op1, op2, op3, op4, op5];
//   let tempNumber;
//   operationsList.forEach((element) => {
//     switch (element) {
//       case "chop": {
//         tempNumber = number / 2;
//         break;
//       }
//       case "dice": {
//         tempNumber = Math.sqrt(number);
//         break;
//       }
//       case "spice": {
//         tempNumber = number + 1;
//         break;
//       }
//       case "bake": {
//         tempNumber = number * 3;
//         break;
//       }
//       case "fillet": {
//         tempNumber = number - (number * 20) / 100;
//         break;
//       }
//     }
//     console.log(tempNumber);
//     number = tempNumber;
//   });
// }

// coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

//--------- 13. Array Rotation

// function rotateArray(inputArray, number) {
//   let firstE;
//   for (let i = 1; i <= number; i++) {
//     firstE = inputArray.shift();
//     inputArray.push(firstE);
//   }
//   console.log(inputArray.join(" "));

// }

// rotateArray([51, 47, 32, 61, 21], 2);

//----------- 14. Print every N-th Element from an Array

// function printNthElement(inputArray, number) {

//   let result=[];

//   for (let i = 0; i <=inputArray.length-1; i=i+number) {
//     result.push(inputArray[i]);
//   }

//   return result;
// }

// printNthElement(['5', '20', '31', '4', '20'], 2);

//----------- 15. List Of Names

// function printNamesAsc(inputArray){

//    inputArray.sort((a, b) => a.localeCompare(b));

// for(let i=0; i<=inputArray.length-1; i++){
//     console.log(`${i+1}.${inputArray[i]}`);
// }
// }

// printNamesAsc(["John", "Bob", "Christina", "Ema"]);

//----------- 16. Sorting Numbers

// function sortNumbers(inputArray) {

//   let sorted = [];
//   sorted = inputArray.sort((a, b) => a - b);

//   let resultArray = [];

//   for (let i = 0; i <= (sorted.length - 1) / 2; i++) {

//     resultArray.push(sorted[i]);

//     sorted.reverse();

//     if (i != (sorted.length - 1) / 2) {
//       resultArray.push(sorted[i]);

//       sorted.reverse();
//     }
//   }

//   console.log(resultArray);
// }

// sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]);

//---------- 17. Reveal Words

// function revealWords(inputWords, inputText) {
//   let words = inputWords.split(", ");
//   let text = inputText.split(" ");
//   let result = inputText;

//   text.forEach((textElement) => {

//     if (textElement.includes("*")) {
//       let countStars = textElement.length;

//       words.forEach((wordElement) => {
//         let countChars = wordElement.length;

//         if (countStars === countChars) {
//          result = result.replace(textElement, wordElement);
//         }
//       });
//     }
//   });

//   console.log(result);
// }

// revealWords(
//   "great, learning",
//   "softuni is ***** place for ******** new programming languages"
// );

//----------- 18.	Modern Times of #(HashTag)

// function findHashTagedWords(inputString) {

//   let singleWords = inputString.split(" ");
//   let result = [];

//   const regexPattern = new RegExp('(#[A-Za-z]+)');

//   singleWords.forEach((word) => {
//     if (word.includes("#") && word.length > 1) {

//       if( regexPattern.test(word))
// {

//         result.push(word);

//       }
//     }
//   });

// result.forEach(element => {
//     console.log(element.replace("#", ""));
// });
// }

// findHashTagedWords('Nowadays everyone uses #, to tag a #special word in #socialMedia');

//---------- 19. String Substring

// function printSubstr(word, text) {
//   let singleWords = text.split(" ");
//   let result = [];

//   singleWords.forEach((element) => {
//     if (element.toLowerCase() === word.toLowerCase()) {
//       result.push(word);
//     }
//   });

//   if (result.length > 0) {
//     console.log(result.join(""));
//   } else {
//     console.log(`${word} not found!`);
//   }
// }

// printSubstr("javascript", "JavaScript is the best programming language");
// printSubstr("python", "JavaScript is the best programming language");


//---------- 20. Pascal-Case Splitter

function splitPascal(inputString){

let result  = inputString.split(/(?=[A-Z])/);

console.log(result.join(", "));

}

splitPascal('SplitMeIfYouCanHaHaYouCantOrYouCan');
