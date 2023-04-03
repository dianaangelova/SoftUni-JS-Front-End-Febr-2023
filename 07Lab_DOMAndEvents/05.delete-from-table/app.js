function deleteByEmail() {
    const textToDelete = document.getElementsByName('email');
    const resultDispaly = document.getElementById('result');
    //console.log("textToDelete: " + Array.from(textToDelete)[0].value);
    const textToDeleteValue = Array.from(textToDelete)[0].value;

    const tdsWithEmails = document.querySelectorAll("td");
    let isFound = false;
    for (const tdElement of Array.from(tdsWithEmails)) {
      //  console.log("tdElement: " + tdElement.value);
        if (textToDeleteValue === tdElement.textContent) {
            tdElement.parentElement.remove();
            textToDelete[0].value="";
            resultDispaly.textContent="Deleted.";
            isFound=true;
        }
    }

    if (!isFound){
        resultDispaly.textContent="Not found.";
    }
}