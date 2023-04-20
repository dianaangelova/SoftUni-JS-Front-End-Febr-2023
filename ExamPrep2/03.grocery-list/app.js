if (typeof document !== 'undefined') {
    function attachEvents() {
        const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

        const tableContainer = document.getElementById("tbody");

        let productElement = document.getElementById("product");
        let countElement = document.getElementById("count");
        let priceElement = document.getElementById("price");


        const btnLoadAll = document.getElementById("load-product");
        const btnUpdateProduct = document.getElementById("update-product");
        const btnAddProduct = document.getElementById("add-product");

        btnLoadAll.addEventListener("click", functionLoadAllProducts);
        btnAddProduct.addEventListener("click", functionAddProduct);

        let editProductId;

        function functionLoadAllProducts(event) {
            if (event) {
                event.preventDefault();
            }

            tableContainer.innerHTML = "";

            fetch(BASE_URL)
                .then((response) => response.json())
                .then((allProductsInfo) => {
                    const currentProducts = Object.values(allProductsInfo);

                    for (const {product, count, price, _id} of currentProducts) {
                        const newTr = createHtmlElement("tr", null, tableContainer);

                        const newTdName = createHtmlElement("td", null, newTr, null, ["name"]);
                        const newTdCount = createHtmlElement("td", null, newTr, null, ["count-product"]);
                        const newTdPrice = createHtmlElement("td", null, newTr, null, ["product-price"]);
                        const newTdBtn = createHtmlElement("td", null, newTr, null, ["btn"]);
                        const newButtonUpdate = createHtmlElement("button", "Update", newTdBtn, null, ["update"]);
                        const newButtonDelete = createHtmlElement("button", "Delete", newTdBtn, null, ["delete"]);


                        newTdName.textContent = `${product}`;
                        newTdCount.textContent = `${count}`;
                        newTdPrice.textContent = `${price}`;

                        newButtonUpdate.id = _id;
                        newButtonDelete.id = _id;

                        newButtonUpdate.addEventListener("click", functionUpdateProduct);
                        newButtonDelete.addEventListener("click", functionDeleteProduct);
                    }
                })
        }

        function functionUpdateProduct(event) {
            event.preventDefault();
            const id = event.currentTarget.id;

            productElement.value = this.parentElement.parentElement.children[0].textContent;
            countElement.value = this.parentElement.parentElement.children[1].textContent;
            priceElement.value = this.parentElement.parentElement.children[2].textContent;

            btnUpdateProduct.disabled = false;
            btnAddProduct.disabled = true;

            editProductId = id;
        }

        btnUpdateProduct.addEventListener("click", functionRealUpdateProduct)

        function functionRealUpdateProduct(event) {
            event.preventDefault();

            const id = editProductId;

            const product = productElement.value;
            const count = countElement.value;
            const price = priceElement.value;

            const httpHeaders = {
                    method: "PATCH",
                    body: JSON.stringify({product, count, price})
                }
            ;
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllProducts();
                })
                .catch((error) => {
                    console.log(error.message);
                })

            this.disabled = true;
            productElement.value = "";
            countElement.value = "";
            priceElement.value = "";

            btnUpdateProduct.disabled=true;
            btnAddProduct.disabled=false;
        }

        function functionDeleteProduct(event) {
            const id = event.currentTarget.id;
            const httpHeaders = {
                method: "DELETE"
            };
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                    functionLoadAllProducts();
                })
                .catch((error) => {
                    console.log(error.message);
                })

        }

        function functionAddProduct(event) {
            event.preventDefault();

            const product = productElement.value;
            const count = countElement.value;
            const price = priceElement.value;

            const httpHeaders = {
                method: "POST",
                body: JSON.stringify({product, count, price})
            }
            fetch(`${BASE_URL}`, httpHeaders)
                .then((response) => response.json())
                .then(() => {
                        functionLoadAllProducts();
                        productElement.value = "";
                        countElement.value = "";
                        priceElement.value = "";
                    }
                )

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