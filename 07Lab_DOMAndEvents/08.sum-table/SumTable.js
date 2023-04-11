function sumTable() {
    let colsToSum = Array.from(document.querySelectorAll("td+td"));
    let sum=0;

    colsToSum.forEach((elem) => {
      //  if (typeof(Number(elem.textContent))=="number"){
            sum=sum + Number(elem.textContent);
       // }
    });
    let sumElement = document.getElementById("sum");
    console.log(sumElement);
    sumElement.textContent=sum;
}