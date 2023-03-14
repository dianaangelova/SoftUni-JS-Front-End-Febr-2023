function passwordValidate(input) {
    const isValidLenth = (pass) => (pass.length >= 6 && pass.length <= 10);
    const hasOnlyLettersAndDigits = (pass) => /^[a-zA-Z0-9]+$/.test(pass);
    const hasAtLeastTwoDigits = (pass) => /[0-9]{2}/.test(pass);

    let message = "";

    if (!isValidLenth(input)) {
        message = message.concat("Password must be between 6 and 10 characters\n");
    }
    if (!hasOnlyLettersAndDigits(input)) {
        message = message.concat("Password must consist only of letters and digits\n")
    }
    if (!hasAtLeastTwoDigits(input)) {
        message = message.concat("Password must have at least 2 digits")
    }
    if (message === "") {
        message = ("Password is valid")
    }
    ;
    return message;
}

console.log(passwordValidate('logI'));