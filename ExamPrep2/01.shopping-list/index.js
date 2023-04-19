function shoppingList(input) {

    let productsList = input.shift().split("!");

    input.forEach(line => {
        let tokens = [];
        tokens = line.split(' ');
        let command = tokens[0];
        let product = tokens[1];

        switch (command) {
            case "Urgent":
                if (!productsList.includes(product)) {
                    productsList.splice(0, 0, product);
                }
                break;
            case "Unnecessary":
                if (productsList.includes(product)) {
                    let index = productsList.indexOf(product);
                    productsList.splice(index, 1);
                }
                break;
            case "Correct":
                let updatedProduct = tokens[2];
                if (productsList.includes(product)) {
                     let index = productsList.indexOf(product);
                    productsList.splice(index, 1, updatedProduct);
                }
                break;
            case "Rearrange":
                if (productsList.includes(product)) {
                   let index = productsList.indexOf(product);
                    productsList.splice(index, 1);
                    productsList.push(product);
                }
                break;

        }
    })

    let print = productsList.join(", ");
    console.log(print);
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
        "Urgent Pork",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Pepper",
    "Rearrange Water",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
    //Milk, Onion, Salt, Water, Banana
);