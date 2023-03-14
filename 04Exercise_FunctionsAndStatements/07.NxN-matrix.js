function matrix(number){

    // let array = [];
    //
    // for (let i = 0; i < number; i++) {
    //     array.push(number);
    // }
    // for (let i = 0; i < number; i++) {
    //     console.log(array.join(" "));
    // }

    return  array = new Array( number).fill(new Array(number).fill(number)).forEach(row=>console.log(row.join(" ")));

}

matrix(3);