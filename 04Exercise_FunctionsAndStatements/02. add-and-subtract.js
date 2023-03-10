function calculations(firstNumber, secondNumber, thirdNumber) {

    let sum = add(firstNumber, secondNumber);
    return subtract(sum, thirdNumber);

    function add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
}

console.log(calculations(1, 10, 3))
;