function attachEvents() {

    if (typeof document !== 'undefined') {

        const btnLoadAllBooks = document.getElementById("loadBooks");
        const tableContainer = document.querySelector("tbody");

        const titleInput = document.querySelector('input[name="title"]');
        const authorInput = document.querySelector('input[name="author"]');

        const btnSubmit = document.querySelector("#form > button");
        const h3element = document.getElementsByTagName("h3");

        let booksAll = {};
        let editBookId = null;

        const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";

        btnLoadAllBooks.addEventListener("click", functionLoadAllBooks);
        btnSubmit.addEventListener("click", functionSubmitEditBook);


        function functionLoadAllBooks() {
            tableContainer.innerHTML = "";
            fetch(BASE_URL)
                .then((response) => response.json())
                .then((bookInfo) => {

                    for (const bookId in bookInfo) {
                        booksAll[bookInfo[bookId].title] = bookId;
                        const {author, title} = bookInfo[bookId];

                        const newTr = document.createElement("tr");

                        const newTdBook = document.createElement("td");
                        const newTdAuthor = document.createElement("td");
                        const newTdButtons = document.createElement("td");

                        const newButtonEdit = document.createElement("button");
                        const newButtonDelete = document.createElement("button");

                        newTdBook.textContent = title;
                        newTdAuthor.textContent = author;

                        newButtonEdit.textContent = "Edit";
                        newButtonEdit.id = bookId;
                        newButtonDelete.textContent = "Delete";
                        newButtonDelete.id = bookId;

                        newTr.appendChild(newTdBook);
                        newTr.appendChild(newTdAuthor);

                        newTdButtons.appendChild(newButtonEdit);
                        newTdButtons.appendChild(newButtonDelete);

                        newTr.appendChild(newTdButtons);

                        tableContainer.appendChild(newTr);

                        newButtonEdit.addEventListener("click", functionEditBook);
                        newButtonDelete.addEventListener("click", functionDeleteBook);

                    }
                })
        }

        function functionSubmitEditBook() {
            const title = titleInput.value;
            const author = authorInput.value;

            if (h3element.textContent === "FORM") {
                const httpHeaders = {
                    method: "POST",
                    body: JSON.stringify({title, author})
                }
                fetch(`${BASE_URL}`, httpHeaders)
                    .then((response) => response.json())
                    .then(() => {
                            functionLoadAllBooks();
                            titleInput.value = "";
                            authorInput.value = "";
                        }
                    )
            } else {
                const httpHeaders = {
                    method: "PUT",
                    body: JSON.stringify({title, author})
                }
                fetch(`${BASE_URL}/${editBookId}`, httpHeaders)
                    .then((response) => response.json())
                    .then(() => {
                            functionLoadAllBooks();
                            titleInput.value = "";
                            authorInput.value = "";
                            h3element.textContent = "FORM";
                            btnSubmit.textContent = "Submit";
                        }
                    )


            }

        }


        function functionDeleteBook(e) {
            const id = e.currentTarget.id;
            const httpHeaders = {
                method: "DELETE"
            };
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllBooks()
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }

        function functionEditBook(e) {
            let titleToEdit = e.currentTarget.parentElement.parentElement.children[0].textContent;
            let authorToEdit = e.currentTarget.parentElement.parentElement.children[1].textContent;
            const titleInput = document.querySelector('input[name="title"]');
            const authorInput = document.querySelector('input[name="author"]');
            titleToEdit=titleInput.textContent;
            authorToEdit=authorInput.textContent;
            editBookId=booksAll[titleToEdit];
            h3element.textContent = "Edit FORM";
            btnSubmit.textContent = "Save";
        }


    }
}

attachEvents();