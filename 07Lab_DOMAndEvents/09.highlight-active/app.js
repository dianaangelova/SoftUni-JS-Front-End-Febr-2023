function focused() {
    let textElements = Array.from(document.querySelectorAll("div input"));

    textElements.forEach((textElement) => {

        textElement.addEventListener("focus", (event) => {
            event.target.parentElement.setAttribute('class',"focused");
        });

        textElement.addEventListener("blur", (event) => {
            event.target.parentElement.setAttribute('class',"");
        });

    });
}