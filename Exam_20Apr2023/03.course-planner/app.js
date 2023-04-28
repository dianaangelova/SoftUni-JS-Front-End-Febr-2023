if (typeof document !== 'undefined') {
    function attachEvents() {
        const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

        const listContainer = document.getElementById("list");

        let courseNameElement = document.getElementById("course-name");
        let courseTypeElement = document.getElementById("course-type");
        let descriptionElement = document.getElementById("description");
        let teacherNameElement = document.getElementById("teacher-name");


        const btnLoadCourses = document.getElementById("load-course");
        const btnEditCourse = document.getElementById("edit-course");
        const btnAddCourse = document.getElementById("add-course");

        btnLoadCourses.addEventListener("click", functionLoadAllCourses);
        btnAddCourse.addEventListener("click", functionAddCourse);

        let editCourseId;

        function functionLoadAllCourses(event) {
            if (event) {
                event.preventDefault();
            }

            listContainer.innerHTML = "";
            courseNameElement.value = "";
            courseTypeElement.value = "";
            descriptionElement.value = "";
            teacherNameElement.value = "";

            btnEditCourse.disabled = true;

            fetch(BASE_URL)
                .then((response) => response.json())
                .then((allCoursesInfo) => {
                    const currentCourses = Object.values(allCoursesInfo);

                    for (const {title, type, description, teacher, _id} of currentCourses) {

                        // <!-- <div class="container">
                        //         <h2>JS Back-End</h2>
                        //         <h3>John Brown</h3>
                        //         <h3>Long</h3>
                        //         <h4>JS Back-end responsible for managing the interchange of data between the server
                        //             and the users</h4>
                        //         <button class="edit-btn">Edit Course</button>
                        //         <button class="finish-btn">Finish Course</button>
                        //     </div> -->

                        const newDiv = createHtmlElement("div", null, listContainer, null, ["container"]);

                        const newH2Title = createHtmlElement("h2", `${title}`, newDiv);
                        const newH3Teacher = createHtmlElement("h3", `${teacher}`, newDiv);
                        const newH3Type = createHtmlElement("h3", `${type}`, newDiv);
                        const newH4Description = createHtmlElement("h4", `${description}`, newDiv);

                        const newButtonEdit = createHtmlElement("button", "Edit Course", newDiv, null, ["edit-btn"]);
                        const newButtonFinish = createHtmlElement("button", "Finish Course", newDiv, null, ["finish-btn"]);


                        newButtonEdit.id = _id;
                        newButtonFinish.id = _id;

                        newButtonEdit.addEventListener("click", functionEditCourse);
                        newButtonFinish.addEventListener("click", functionFinishCourse);

                    }
                })
        }

        function functionEditCourse(event) {
            event.preventDefault();
            const id = event.currentTarget.id;

            courseNameElement.value = this.parentElement.children[0].textContent;
            courseTypeElement.value = this.parentElement.children[2].textContent;
            descriptionElement.value = this.parentElement.children[3].textContent;
            teacherNameElement.value = this.parentElement.children[1].textContent;

            btnEditCourse.disabled = false;
            btnAddCourse.disabled = true;
            this.parentElement.remove();
            editProductId = id;
        }


        btnEditCourse.addEventListener("click", functionRealEditCourse)

        function functionRealEditCourse(event) {
            event.preventDefault();
            const id = editProductId;

            const title = courseNameElement.value;
            const type = courseTypeElement.value;
            const description = descriptionElement.value;
            const teacher = teacherNameElement.value;

            const httpHeaders = {
                    method: "PATCH",
                    body: JSON.stringify({title, type, description, teacher})
                }
            ;
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllCourses();
                })
                .catch((error) => {
                    console.log(error.message);
                })

            this.disabled = true;
            courseNameElement.value = "";
            courseTypeElement.value = "";
            descriptionElement.value = "";
            teacherNameElement.value = "";

            btnAddCourse.disabled = false;
        }


        function functionFinishCourse(event) {
            const id = event.currentTarget.id;
            const httpHeaders = {
                method: "DELETE"
            };
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllCourses();
                })
                .catch((error) => {
                    console.log(error.message);
                })

        }

        function functionAddCourse(event) {
            event.preventDefault();
            //check TYPE values
            //{title, type, description, teacher, _id}


            const title = courseNameElement.value;
            const type = courseTypeElement.value;
            const description = descriptionElement.value;
            const teacher = teacherNameElement.value;

            if (!title=="" && !type=="" && !description=="" && !teacher==""){



            const httpHeaders = {
                method: "POST",
                body: JSON.stringify({title, type, description, teacher})
            }
            fetch(`${BASE_URL}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                        functionLoadAllCourses();
                        courseNameElement.value = "";
                        courseTypeElement.value = "";
                        descriptionElement.value = "";
                        teacherNameElement.value = "";
                    }
                )    }
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

attachEvents();

}