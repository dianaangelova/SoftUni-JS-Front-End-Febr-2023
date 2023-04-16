function attachEvents() {
    const ulContainer = document.getElementById("phonebook");
    const btnLoad = document.getElementById("btnLoad");

    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const btnCreate = document.getElementById("btnCreate");

    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

    btnLoad.addEventListener("click", functionLoadContacts);
    btnCreate.addEventListener("click", functionCreateContacts);

    function functionLoadContacts() {
        ulContainer.innerHTML = "";

        fetch(`${BASE_URL}`, {method: 'GET'})
            .then((response) => response.json())
            .then((phoneBookInfo) => {

                Object.values(phoneBookInfo).forEach((record) => {

                        const newLi = document.createElement("li");
                        const newDeleteBtn = document.createElement("button");
                        newDeleteBtn.textContent = "Delete";
                        newLi.textContent = `${record.person}: ${record.phone}`;
                        ulContainer.appendChild(newLi);
                        newLi.appendChild(newDeleteBtn);

                        newDeleteBtn.id = record._id;

                        newDeleteBtn.addEventListener("click", functionDeleteContact);
                    }
                )

            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    function functionCreateContacts() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({person, phone})
        }

        fetch(`${BASE_URL}`, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                    functionLoadContacts();
                    personInput.value = "";
                    phoneInput.value = "";
                }
            )
    }

    function functionDeleteContact(e) {
        const id = e.currentTarget.id;
        const httpHeaders = {
            method: "DELETE"
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((response) => response.json())
            .then(()=>{functionLoadContacts()})
            .catch((error)=>{
                console.log(error.message);
            })
    }
}

attachEvents();