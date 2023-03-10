function calculate(number1, number2, operation) {
    const multiply = (a, b) => (a * b);
    const divide = (a, b) => (a / b);
    const add = (a, b) => (a + b);
    const subtract = (a, b) => (a - b);

    switch (operation) {
        case "multiply":
            return multiply(number1, number2);
            break;
        case "divide":
            return divide(number1, number2);
            break;
        case "add":
            return add(number1, number2);
            break;
        case "subtract":
            return subtract(number1, number2);
            break;

    }

}