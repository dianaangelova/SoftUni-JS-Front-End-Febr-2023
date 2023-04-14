function solve() {
    const inputSearch = document.getElementById("searchField");
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick(event) {
        const linesInput = Array.from(document.querySelectorAll("tbody > tr"));
        linesInput.forEach((line) => {
                const lineValue = line.textContent.trim();
                const searchValue = inputSearch.value;

                if (line.classList.contains("select")) {
                    line.classList.remove("select");
                }
                if (lineValue.includes(searchValue)) {
                    line.classList.add("select");
                }
            }
        )
        inputSearch.value = "";
    }
}