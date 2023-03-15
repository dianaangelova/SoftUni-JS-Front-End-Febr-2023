function factorialDivision(numberOne, numberTwo) {

    return (getFactorial(numberOne)/getFactorial(numberTwo)).toFixed(2);

    function getFactorial(num) {
        if (num === 1) {
            return num;
        }
        return num * getFactorial(num - 1);
    }
}

console.log(factorialDivision(6,2));