function signCheck(...numbers) {
    return numbers
        .filter((element) => element<0)
        .length%2===0?"Positive":"Negative";
}