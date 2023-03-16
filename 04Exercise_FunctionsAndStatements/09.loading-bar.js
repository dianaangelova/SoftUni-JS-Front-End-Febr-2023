function loadingBar(number) {

    let residue = number / 10;

    let array = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    for (let i = 0; i < residue; i++) {
        array.splice(i,1 , '%');
    }

    console.log(`${number}% [${array.join("")}]`);
    if (residue === 10) {
        console.log(`100% Complete!`);
    } else {
        console.log(`Still loading...`);
    }
}

loadingBar(30);