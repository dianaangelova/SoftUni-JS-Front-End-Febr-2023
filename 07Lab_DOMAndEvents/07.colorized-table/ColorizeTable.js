function colorize() {
    let rowsToColor = Array.from(document.querySelectorAll("tr:nth-child(even)"));

    rowsToColor.forEach((elem) => {
        elem.style.backgroundColor = "teal";
    });
}