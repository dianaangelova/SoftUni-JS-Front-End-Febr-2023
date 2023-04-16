function loadRepos() {
    const BASE_URL = "https://api.github.com/users/";
    const ulContainer = document.getElementById("repos");
    const usernameVal = document.getElementById("username").value;
    fetch(`${BASE_URL}${usernameVal}/repos`, {method: 'GET'})
        //response.text() returns new promise<string>
        //in the future we will use json
        .then((response) => response.json())
        .then((data) => {
            //data is an array !!!!
            let existingList = Array.from(ulContainer.children);
            existingList.forEach((li)=>li.remove());
            data.forEach((objectLine) => {
                const newLi = document.createElement("li");
                newLi.textContent=`${objectLine.full_name}`;
                ulContainer.append(newLi);
            })
        })
        //when working with promises we always need catch block
        .catch((error) => {
            const newLi = document.createElement("li");
            newLi.textContent=error.status;
            ulContainer.append(newLi);
        })
}