function addItem() {
    let inputNewItemText = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    let newLi = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = "#";
    anchor.textContent = "[Delete]";
    newLi.textContent = inputNewItemText.value;
    ul.appendChild(newLi);
    newLi.appendChild(anchor);
    inputNewItemText.value = "";
    anchor.addEventListener('click', functionDelete);

    function functionDelete() {
        anchor.parentElement.remove();
    }

}