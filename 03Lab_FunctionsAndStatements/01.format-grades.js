function formatGrades(grade) {
  let result;
  if (grade < 3.0) {
   return (`Fail (2)`);
  } else if (grade >= 3.0 && grade < 3.5) {
    result = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    result = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    result = "Very good";
  } else if (grade >= 5.5) {
    result = "Excellent";
  }

  printResult(result, grade);

  function printResult(result, grade) {
    if (result!="undefined"){
      console.log(`${result} (${grade.toFixed(2)})`);
    }
  }
}

formatGrades(3.33);
