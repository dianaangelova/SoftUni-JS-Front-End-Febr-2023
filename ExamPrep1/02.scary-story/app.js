//if (typeof window !== 'undefined') {
    window.addEventListener("load", solve);

    function solve() {
        let firstName = document.getElementById("first-name");
        let lastName = document.getElementById("last-name");
        let age = document.getElementById("age");
        let storyTitle = document.getElementById("story-title");
        let genre = document.getElementById("genre");
        let story = document.getElementById("story");
        let btnPublish = document.getElementById("form-btn");

        let previewList = document.getElementById("preview-list");

        let divMain = document.getElementById("main");

        btnPublish.addEventListener("click", functionPushData);

        function functionPushData(e) {
            e.preventDefault();
            if (firstName.value == ""
                || lastName.value == ""
                || age.value == ""
                || storyTitle.value == ""
                || story.value == "") {
                return;
            }

            let liStoryInfoElement = createHtmlElement("li", null, document.getElementById("preview-list"), null, ["story-info"]);
            let articleElement = createHtmlElement("article", null, document.getElementById("preview-list").children[1]);

            let h4Content = "Name: ".concat(firstName.value).concat(" ").concat(lastName.value);
            let h4Element = createHtmlElement("h4", h4Content, document.getElementById("preview-list").children[1].children[0]);

            let ageContent = "Age: ".concat(age.value);
            let ageElement = createHtmlElement("p", ageContent, document.getElementById("preview-list").children[1].children[0]);

            let titleContent = "Title: ".concat(storyTitle.value);
            let titleElement = createHtmlElement("p", titleContent, document.getElementById("preview-list").children[1].children[0]);

            let genreContent = "Genre: ".concat(genre.value);
            let genreElement = createHtmlElement("p", genreContent, document.getElementById("preview-list").children[1].children[0]);

            let storyContent = "\"".concat(story.value).concat("\"");
            let storyElement = createHtmlElement("p", storyContent, document.getElementById("preview-list").children[1].children[0]);

            let btnSave = createHtmlElement("button", "Save Story", document.getElementById("preview-list").children[1], null, ["save-btn"]);
            let btnEdit = createHtmlElement("button", "Edit Story", document.getElementById("preview-list").children[1], null, ["edit-btn"]);
            let btnDelete = createHtmlElement("button", "Delete Story", document.getElementById("preview-list").children[1], null, ["delete-btn"]);

            let editFirstName = firstName.value;
            let editLastName = lastName.value;
            let editAge = age.value;
            let editStoryTitle = storyTitle.value;
            let editGenre = genre.value;
            let editStory = story.value;

            firstName.value = "";
            lastName.value = "";
            age.value = "";
            storyTitle.value = "";
            genre.textContent = "";
            let optDisturbing = document.createElement("option");
            optDisturbing.text = "Disturbing";
            optDisturbing.value = "Disturbing";
            let optPsychological = document.createElement("option");
            optPsychological.text = "Psychological";
            optPsychological.value = "Psychological";
            let optKiller = document.createElement("option");
            optKiller.text = "Killer";
            optKiller.value = "Killer";
            let optMonsters = document.createElement("option");
            optMonsters.text = "Monsters";
            optMonsters.value = "Monsters";
            let optParanormal = document.createElement("option");
            optParanormal.text = "Paranormal";
            optParanormal.value = "Paranormal";
            genre.appendChild(optDisturbing);
            genre.appendChild(optPsychological);
            genre.appendChild(optKiller);
            genre.appendChild(optMonsters);
            genre.appendChild(optParanormal);
            story.value = "";

            btnPublish.disabled = true;

            btnEdit.addEventListener("click", functionEdit);

            function functionEdit() {
                console.log(editGenre);
                firstName.value = editFirstName;
                lastName.value = editLastName;
                age.value = editAge;
                storyTitle.value = editStoryTitle;
                genre.value = editGenre;
                story.value = editStory;
                liStoryInfoElement.remove();
                btnPublish.disabled = false;
            }

            btnSave.addEventListener("click", functionSave);

            function functionSave() {
                divMain.innerHTML = "";
                let h1SaveMessage = document.createElement("h1");
                h1SaveMessage.textContent = "Your scary story is saved!";
                divMain.appendChild(h1SaveMessage);
            }

            btnDelete.addEventListener("click", functionDelete);

            function functionDelete() {
                liStoryInfoElement.remove();
                btnPublish.disabled = false;
            }
        }


//typeOfElement=string
//content=string(text content or value)
//parent=string
//classes=array of strings
//attributes=object
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

            //how to use the createHtmlElement function

            //const p =
            //         createHtmlElement("p", "my new paragraph",
            //             document.getElementById("preview-list"), "parag", ["class1", "class2"], {'scr':'linkSRC'},"yes");
        }
    }


//}