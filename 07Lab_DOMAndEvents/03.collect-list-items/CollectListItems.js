function extractText() {
    let elementsArray = Array.from(document.querySelectorAll('#items > li'));
    let result = document.getElementById('result');
    elementsArray.forEach((li)=>result.textContent+=li.textContent + '\n');
}