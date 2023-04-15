function solve() {
    const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName("textarea"));
    const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName("button"));
    const tbody = document.querySelector(".table > tbody");

    generateBtn.addEventListener("click", generateHandler);
    buyBtn.addEventListener("click", buyHandler);

    function generateHandler() {
        const data = JSON.parse(generateTextArea.value);
        //destructuring data array to {img, name, price, decFactor}
        for (const {img, name, price, decFactor} of data) {
            const tableRow = createHtmlElement('tr', "", tbody);
            const firstColumnTd = createHtmlElement("td", "", tableRow);
            createHtmlElement('img', "", firstColumnTd, "", "", {src: img});
            const secondColumnTd = createHtmlElement("td", "", tableRow);
            createHtmlElement('p', name, secondColumnTd);
            const thirdColumnTd = createHtmlElement("td", "", tableRow);
            createHtmlElement('p', price, thirdColumnTd);
            const fourthColumnTd = createHtmlElement("td", "", tableRow);
            createHtmlElement('p', decFactor, fourthColumnTd);
            const fifthColumnTd = createHtmlElement("td", "", tableRow);
            createHtmlElement('input', "", fifthColumnTd, "", "", {type: 'checkbox'});

        }
    }

    function buyHandler() {
        const allCheckedInputs = Array.from(document.querySelectorAll("tbody td input:checked"));
        let boughtItems=[];
        let totalPrice=0;
        let totalDecFactor=0;


        for (const input of allCheckedInputs) {
            const tableRow = input.parentElement.parentElement;
            const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
            let item = secondColumn.children[0].textContent;
            boughtItems.push(item);
            let currentPrice = Number(thirdColumn.children[0].textContent);
            totalPrice+=currentPrice;
            let currentDecFactor = Number(fourthColumn.children[0].textContent);
            totalDecFactor+=currentDecFactor;
        }

        buyTextArea.value +=`Bought furniture: ${boughtItems.join(", ")}\n`
        +`Total price: ${totalPrice.toFixed(2)}\n`
        +`Average decoration factor: ${totalDecFactor/allCheckedInputs.length}`;
    }

    //typeOfElement=string
    //content=string(text content or value)
    //parent=string
    //classes=array of strings
    //attributes=object
    function createHtmlElement(typeOfElement, content, parent, id, classes, attributes) {
        const htmlElement = document.createElement(typeOfElement);

        if (typeOfElement !== "input" && content) {
            htmlElement.textContent = content;
        }
        if (typeOfElement === 'input' && content) {
            htmlElement.value = content;
        }
        if (parent) {
            parent.appendChild(htmlElement);
        }
        if (id) {
            htmlElement.id = id;
        }
        //['list', 'item']
        if (classes) {
            htmlElement.classList.add(...classes);
        }
        //{src:'link to image', href: 'link to site', type: 'checkbox'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        return htmlElement;
    }
}