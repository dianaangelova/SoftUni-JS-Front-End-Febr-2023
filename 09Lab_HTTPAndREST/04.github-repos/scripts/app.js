function loadRepos() {
    const BASE_URL = "https://api.github.com/users/testnakov/repos";
    const resultContainer = document.getElementById("res");
    fetch(BASE_URL, {method: 'GET'})
        //response.text() returns new promise<string>
        //in the future we will use json
        .then((response) => response.text())
        .then((data) => {
            resultContainer.textContent = data;
        })
        //when working with promises we always need catch block
        .catch((error) => {
            console.log(error);
        })
}