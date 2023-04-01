function calc() {
    const inputItem1 = document.getElementById('num1');
    const inputItem2 = document.getElementById('num2');
    const inputSum = document.getElementById('sum');
    const resultSum = Number(inputItem1.value) + Number(inputItem2.value);
    inputSum.value = resultSum;
}
