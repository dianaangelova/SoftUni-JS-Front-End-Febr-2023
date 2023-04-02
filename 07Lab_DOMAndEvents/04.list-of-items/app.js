function addItem() {
    let inputNewItemText = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent=inputNewItemText.value;
    ul.appendChild(newLi);
    inputNewItemText.value="";
}