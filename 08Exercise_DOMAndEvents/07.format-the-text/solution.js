function solve() {
    const inputText = document.getElementById("input");
    const outputText = document.getElementById("output");
    const sentences = inputText.value.split('.');
    sentences.pop(); // the last element is always empty
    const filteredSentences = sentences.filter((elem) => elem.length != 0);

    while (sentences.length > 0) {
        let paragraphSentences = sentences.splice(0, 3)
            .map((p) => p.trimStart()); // remove the leading space from each sentence
        const newP = document.createElement("p");
        newP.textContent = paragraphSentences+(".");
        outputText.appendChild(newP);
    }
}