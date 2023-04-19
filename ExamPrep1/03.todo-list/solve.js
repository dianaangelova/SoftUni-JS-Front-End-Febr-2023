if (typeof document !== 'undefined') {
    const btnLoadAll = document.getElementById("load-button");
    const ulContainer = document.getElementById("todo-list");

    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    const newTaskName = document.getElementById("title");
    const btnAddTask = document.getElementById("add-button");

    function attachEvents() {
        btnLoadAll.addEventListener("click", functionLoadAllTasks);
        btnAddTask.addEventListener("click", functionAddTask);
    }

    function functionLoadAllTasks(event) {
        if (event) {
            event.preventDefault();
        }
        ulContainer.innerHTML = "";
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((tasksInfo) => {

                Object.values(tasksInfo).forEach((task) => {
                        const newLi = document.createElement("li");

                        const newSpanTaskName = document.createElement("span");
                        const newBtnRemove = document.createElement("button");
                        const newBtnEdit = document.createElement("button");

                        newSpanTaskName.textContent = `${task.name}`;
                        newBtnRemove.textContent = "Remove";
                        newBtnEdit.textContent = "Edit";

                        newBtnRemove.id = task._id;
                        newBtnEdit.id = task._id;

                        ulContainer.appendChild(newLi);
                        newLi.appendChild(newSpanTaskName);
                        newLi.appendChild(newBtnRemove);
                        newLi.appendChild(newBtnEdit);

                        newBtnRemove.addEventListener("click", functionRemoveTask);
                        newBtnEdit.addEventListener("click", functionEditTask);
                    }
                )
            })
    }

    function functionAddTask(event) {
        event.preventDefault();
        const name = newTaskName.value;
        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({name})
        }
        fetch(`${BASE_URL}`, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                    functionLoadAllTasks();
                    newTaskName.value = "";
                }
            )

    }

    function functionRemoveTask(event) {
        const id = event.currentTarget.id;
        const httpHeaders = {
            method: "DELETE"
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                functionLoadAllTasks();
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    function functionEditTask(event) {
        event.preventDefault();
        const id = event.currentTarget.id;
        if (event.currentTarget.textContent === "Edit") {
            const oldName = event.currentTarget.parentElement.children[0].textContent;
            console.log(event.currentTarget.parentElement.children[0].textContent);

            let newInput = document.createElement("input");
            let oldSpam = event.currentTarget.parentElement.children[0];
            newInput.value = oldName;
            event.currentTarget.parentNode.replaceChild(newInput, oldSpam);

            event.currentTarget.textContent = "Submit";
            let name = newInput.value;
        } else if (event.currentTarget.textContent === "Submit") {
            let name = event.currentTarget.parentElement.children[0].value;
            const httpHeaders = {
                    method: "PATCH",
                    body: JSON.stringify({name})
                }
            ;
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllTasks();
                })
                .catch((error) => {
                    console.log(error.message);
                })
            event.currentTarget.textContent = "Edit";

        }
    }

    attachEvents();
}
