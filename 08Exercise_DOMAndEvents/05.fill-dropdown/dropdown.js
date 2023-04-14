function addItem() {
    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");
    const selectElement = document.getElementById("menu");

    const option = document.createElement("option");
    option.text = text.value;
    option.value = value.value;
    selectElement.appendChild(option);

    text.value = "";
    value.value = "";

}