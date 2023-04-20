if (typeof window !== 'undefined') {
    window.addEventListener('load', solve);

    function solve() {
        let genre = document.getElementById("genre");
        let name = document.getElementById("name");
        let author = document.getElementById("author");
        let date = document.getElementById("date");

        let allHitsContainer = document.querySelector(".all-hits-container");
        let savedContainer = document.querySelector(".saved-container");
        let btnAdd = document.getElementById("add-btn");

        let likeDivElement = document.querySelector(".likes");

        btnAdd.addEventListener("click", functionAddSong);

        function functionAddSong(e) {
            e.preventDefault();
            if (genre.value == ""
                || name.value == ""
                || author.value == ""
                || date.value == "") {
                return;
            }

            let divElement = createHtmlElement("div", null, allHitsContainer, null, ["hits-info"]);
            let imgElement = createHtmlElement("img", null, divElement, null, null, {src: "./static/img/img.png"});
            let h2GenreElement = createHtmlElement("h2", `Genre: ${genre.value}`, divElement);
            let h2NameElement = createHtmlElement("h2", `Name: ${name.value}`, divElement);
            let h2GAuthorElement = createHtmlElement("h2", `Author: ${author.value}`, divElement);
            let h3DateElement = createHtmlElement("h3", `Date: ${date.value}`, divElement);

            let btnSave = createHtmlElement("button", "Save song", divElement, null, ["save-btn"]);
            let btnLike = createHtmlElement("button", "Like song", divElement, null, ["like-btn"]);
            let btnDelete = createHtmlElement("button", "Delete", divElement, null, ["delete-btn"]);

            genre.value = "";
            name.value = "";
            author.value = "";
            date.value = "";

            btnLike.addEventListener("click", functionLike);
            btnSave.addEventListener("click", functionSave);
            btnDelete.addEventListener("click", functionDeleteCollection);
        }

        function functionDeleteCollection() {
            this.parentElement.remove();
        }

        function functionLike(event) {
            let textTotalLikes = likeDivElement.children[0].textContent;
            let prevNumber = textTotalLikes.replace("Total Likes: ", "");
            let newNumber = Number(prevNumber) + 1;
            likeDivElement.children[0].textContent = `Total Likes: ${newNumber}`;
            this.disabled = true;
        }

        function functionSave(event) {

            let divElement = createHtmlElement("div", null, savedContainer, null, ["hits-info"]);
            let imgElement = createHtmlElement("img", null, divElement, null, null, {src: "./static/img/img.png"});
            let h2GenreElement = createHtmlElement("h2", this.parentElement.children[1].textContent, divElement);
            let h2NameElement = createHtmlElement("h2", this.parentElement.children[2].textContent, divElement);
            let h2GAuthorElement = createHtmlElement("h2", this.parentElement.children[3].textContent, divElement);
            let h3DateElement = createHtmlElement("h3", this.parentElement.children[4].textContent, divElement);
            let btnDeleteSaved = createHtmlElement("button", "Delete", divElement, null, ["delete-btn"]);

            this.parentElement.remove();

            btnDeleteSaved.addEventListener("click", functionDeleteSavedSong);

        }


        function functionDeleteSavedSong() {
            this.parentElement.remove();
        }

        function createHtmlElement(typeOfElement, content, parent, id, classes, attributes, useInnerHTML) {
            const htmlElement = document.createElement(typeOfElement);


            if (content && useInnerHTML) {
                htmlElement.innerHTML = content;
            } else {
                if (typeOfElement !== "input" && content) {
                    htmlElement.textContent = content;
                }
                if (typeOfElement === 'input' && content) {
                    htmlElement.value = content;
                }
                if (typeOfElement === 'textarea' && content) {
                    htmlElement.value = content;
                }
            }

            if (id) {
                htmlElement.id = id;
            }
            //['list', 'item']
            if (classes && classes.length > 0) {
                //classes is array with a number of classes -> (...classes)
                htmlElement.classList.add(...classes);
            }
            //objects -> {src:'link to image', href: 'link to site', type: 'checkbox'}
            if (attributes) {
                for (const key in attributes) {
                    // same as next line: htmlElement[key] = attributes[key];
                    htmlElement.setAttribute(key, attributes[key]);
                }
            }
            if (parent) {
                parent.appendChild(htmlElement);
            }

            return htmlElement;
        }
    }
}