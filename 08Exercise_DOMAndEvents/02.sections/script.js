function create(words) {
    const elements = Array.from(document.getElementsByTagName("body"));
    const content = document.getElementById("content");


    words.forEach((elem) => {
        console.log(elem);
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');

        newP.textContent=elem;
        newP.style.display="none";

        newDiv.appendChild(newP);
        content.appendChild(newDiv);
        newDiv.addEventListener("click", () => {
            newP.style.display="block";
        })
    });
}