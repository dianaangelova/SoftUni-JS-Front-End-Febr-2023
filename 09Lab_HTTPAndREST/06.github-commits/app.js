function loadCommits() {
    const BASE_URL = "https://api.github.com/repos/";
    const ulContainer = document.getElementById("commits");
    const usernameVal = document.getElementById("username").value;
    const repositoryVal = document.getElementById("repo").value;

    fetch(`${BASE_URL}${usernameVal}/${repositoryVal}/commits`, {method: 'GET'})
        //response.text() returns new promise<string>
        //in the future we will use json
        .then((response) => response.json())
        .then((data) => {
            //data is an array !!!!
            let existingList = Array.from(ulContainer.children);
            existingList.forEach((li)=>li.remove());
            data.forEach((objectLine) => {
                const newLi = document.createElement("li");
                newLi.textContent=`${objectLine.commit.author.name}: ${objectLine.commit.message}`;
                ulContainer.appendChild(newLi);
            })
        })
        //when working with promises we always need catch block
        .catch((error) => {
            const newLi = document.createElement("li");
            newLi.textContent=error.status;
            ulContainer.append(newLi);
        })
}