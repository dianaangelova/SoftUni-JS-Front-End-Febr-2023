function repeatString(input, number){

    let result="";

    while (number>0){
        result=result.concat(input);
        number--;
    }

return result;
}