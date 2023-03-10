//---------- 01. Multiply the Number by 2

// function solve(num) {
//   console.log(num * 2);
// }

// solve(3);

//---------- 02. Student Information

// function printStudent(name, age, grade) {
//   console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }

// printStudent("John", 15, 5.54678);

//---------- 03. Excellent grade

// function grade(num) {
//   if (num >= 5.5) {
//     console.log("Excellent");
//   } else {
//     console.log("Not excellent");
//   }
// }

// grade(4.23);
// grade(5.6);

//---------- 04. Month Printer

// function monthPrint(num) {
//   switch (num) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//     default:
//       console.log("Error!");
//       break;
//   }
// }

// monthPrint(-1);

//---------- 05. Math Operations

// function calculate(num1, num2, operation) {
//   let result;
//   switch (operation) {
//     case "+":
//       result = num1 + num2;
//     case "-":
//       result = num1 - num2;
//     case "*":
//       result = num1 * num2;
//     case "/":
//       result = num1 / num2;
//     case "%":
//       result = num1 % num2;
//     case "**":
//       result = num1 ** num2;
//   }
//   console.log(result);
// }

// calculate(5, 6, "+");

//----------  06. Largest Number

// function largestNumber(num1, num2, num3) {
//   let largestNumber;
//   if (num1 > num2 && num1 > num3) {
//     largestNumber = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     largestNumber = num2;
//   } else if (num3 > num1 && num3 > num2) {
//     largestNumber = num3;
//   }
//   console.log(`The largest number is ${largestNumber}.`);
// }

// largestNumber(1, 2, 3);

//----------  07. Theatre Promotions

// function getTheatherTickets(day, age) {
//   let price;
//   if (day === "Weekday") {
//     if (age >= 0 && age <= 18) {
//       result = 12;
//     } else if (age > 18 && age <= 64) {
//       result = 18;
//     } else if (age > 64 && age <= 122) {
//       result = 12;
//     } else if (age<0 || age>122){ return console.log("Error!");}
//   } else if (day === "Weekend") {
//     if (age >= 0 && age <= 18) {
//       result = 15;
//     } else if (age > 18 && age <= 64) {
//       result = 20;
//     } else if (age > 64 && age <= 122) {
//       result = 15;
//     } else if (age<0 || age>122) {return console.log("Error!");}
//   } else if (day === "Holiday") {
//     if (age >= 0 && age <= 18) {
//       result = 5;
//     } else if (age > 18 && age <= 64) {
//       result = 12;
//     } else if (age > 64 && age <= 122) {
//       result = 10;
//     } else if (age<0 || age>122) {return console.log("Error!");}
//   } else if (
//     day !== "Weekday" ||
//     day !== "Weekend" ||
//     day !== "Holiday"  ){
//     return console.log("Error!");
//   }
//   console.log(`${result}$`);
// }

// getTheatherTickets("Holiday", 200);

//----------  08.	Circle Area

// function calculateCircleArea(input){
//     let result;
//     let typeOfInput = typeof(input);
//     if (typeOfInput==="number"){
//         result=Math.PI*Math.pow(input, 2);
//         console.log(`${result.toFixed(2)}`);
//     }    else
//     console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
// }

// calculateCircleArea(5);
// calculateCircleArea('name');

//----------  09. Numbers from 1 to 5

// function printNumbers(){
// for(i=1; i<=5; ++i){
//     console.log(`${i}`);
// }
// }

// printNumbers();

//---------- 10. Numbers from M to N

// function printNumbersMN(m, n){
// for(i=m; i>=n; --i){
//     console.log(`${i}`);
// }
// }

// printNumbersMN(6,2);

//---------- 11. Sum First and Last Array Elements

// function sumArrayElements(input){
//     let first=input[0];
//     let last=input[input.length-1];
//     let result = first+last;
//     console.log(result);
// }

// sumArrayElements([20, 30, 40]);

//---------- 12. Reverse an Array of Numbers

// function reverseArrayElements(number, input) {
//   var resultArray = [];
//   resultArray.length = number;

// for(i=number-1; i>=0;i--){
//     resultArray.push(input[i]);
// }

//   console.log(resultArray.join(" "));
// }

// reverseArrayElements(3, [1, 2, 3, 4, 5 ])

//---------- 13. Even and Odd Subtraction

// function evenAndOddSubstr(array) {
//   let evenNumbersSum=0;
//   let oddNumbersSum=0;

//   for (i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 == 0) {
//         evenNumbersSum=evenNumbersSum+array[i];
//     } else {
//       oddNumbersSum=oddNumbersSum+array[i];
//     }
//   }
//   console.log(evenNumbersSum-oddNumbersSum);
// }

// evenAndOddSubstr([1, 2, 3, 4, 5, 6]);

//---------- 14. Substring

// function substr(inputString, startIndex, count){
// console.log(inputString.substring(startIndex, count+startIndex));
// }

//  substr('ASentence', 1, 8);

//--------- 15. Censored Words

// function censoredWords(inputString, word) {
//   let stars = "";

//   for (let index = 0; index < word.length; index++) {
//     stars = stars.concat("*");
//   }

//   let result = inputString;

//   while (result.includes(word)) {
//     result  = result.replace(word, stars);
//   }

//   console.log(result);
// }

// censoredWords("A small sentence with some words small", "small");
// censoredWords('Find the hidden word', 'hidden');

//--------- 16. Count String Occurrences

function countStringOccur(inputText, word) {
  let count = 0;
  let words = inputText.split(' ');

  words.forEach((element) => {
    if (element === word) {
      count++;
    }
  });

  console.log(count);
}

countStringOccur("This is a word and it also is a sentence", "is");