if (typeof window !== 'undefined') {
    window.addEventListener("load", solve);


    function solve() {

        let title = document.getElementById("task-title");
        let category = document.getElementById("task-category");
        let content = document.getElementById("task-content");

        let btnPublish = document.getElementById("publish-btn");
        btnPublish.addEventListener("click", functionPublish);

        let reviewListElement = document.getElementById("review-list");
        let publishedListElement = document.getElementById("published-list");

        let editTitle;
        let editCategory;
        let editContent;

        function functionPublish(e) {
            e.preventDefault();

            if (title.value == ""
                || category.value == ""
                || content.value == "") {
                return;
            }

            let liElement = createHtmlElement("li", null, reviewListElement, null, ["rpost"]);
            let articleElement = createHtmlElement("article", null, liElement);
            let h4Title = createHtmlElement("h4", `${title.value}`, articleElement);
            let pCategory = createHtmlElement("p", `Category: ${category.value}`, articleElement);
            let pContent = createHtmlElement("p", `Content: ${content.value}`, articleElement);

            let btnEdit = createHtmlElement("button", "Edit", liElement, null, ["action-btn", "edit"]);
            let btnPost = createHtmlElement("button", "Post", liElement, null, ["action-btn", "post"]);

            editTitle = title.value;
            editCategory = category.value;
            editContent = content.value;

            title.value = "";
            category.value = "";
            content.value = "";

            btnEdit.addEventListener("click", functionEdit);
            btnPost.addEventListener("click", functionPost);
        }

        function functionPost(event) {

            console.log(event.currentTarget.parentElement.children[0].children[0]);

            let titleText = event.currentTarget.parentElement.children[0].children[0].textContent;
            let categoryText = event.currentTarget.parentElement.children[0].children[1].textContent;
            let contentText = event.currentTarget.parentElement.children[0].children[2].textContent;

            let liElement = createHtmlElement("li", null, publishedListElement, null, ["rpost"]);
            let articleElement = createHtmlElement("article", null, liElement);
            let h4Title = createHtmlElement("h4", `${titleText}`, articleElement);
            let pCategory = createHtmlElement("p", `${categoryText}`, articleElement);
            let pContent = createHtmlElement("p", `${contentText}`, articleElement);

            event.currentTarget.parentElement.remove();
        }

        function functionEdit(event) {
            title.value = editTitle;
            category.value = editCategory;
            content.value = editContent;

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

            //how to use the createHtmlElement function

            //const p =
            //         createHtmlElement("p", "my new paragraph",
            //             document.getElementById("preview-list"), "parag", ["class1", "class2"], {'scr':'linkSRC'},"yes");
        }

    }
}