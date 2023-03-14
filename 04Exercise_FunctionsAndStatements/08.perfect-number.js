function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    let message;
    if (number == sum) {
        message = "We have a perfect number!";
    } else {
        message = "It's not so perfect.";
    }

    return message;
}

console.log(isPerfect(1236498));