function charactersInRange(charOne, charTwo) {

    let codeOne = charOne.charCodeAt(0);
    let codeTwo = charTwo.charCodeAt(0);
    let array = [];

    let start=-1;
    let end=-1;

    if (codeOne<codeTwo){
        start=codeOne+1;
        end = codeTwo-1;
    } else if (codeTwo<codeOne) {
        start = codeTwo+1;
        end=codeOne-1;
    }
    for (let i = start; i <= end; i++) {
        array.push(String.fromCharCode(i));
    }
    console.log(array.join(" "));
}

charactersInRange('C', '#');