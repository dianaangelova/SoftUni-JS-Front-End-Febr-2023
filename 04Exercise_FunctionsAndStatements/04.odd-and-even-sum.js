function oddAndEvenSum(number) {
    let array = [...number.toString()];
    let sumOdd=0;
    let sumEven=0;
    let resultOdd = oddSum(array);
    let resultEven = evenSum(array);

    function oddSum(array) {
       let arrayOdd =   array.filter((element) => Number(element) % 2!==0)
        .map(element => sumOdd = sumOdd  + Number(element));

         return sumOdd;
    }

    function evenSum(array) {
        let arrayEven =   array.filter((element) => Number(element) % 2===0)
            .map(element => sumEven = sumEven  + Number(element));

        return sumEven;
    }

    console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven}`);

}

oddAndEvenSum(1000435);
