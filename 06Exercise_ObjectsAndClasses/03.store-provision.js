function storeProvisionParser(firstArray, secondArray) {
    let combined = [...firstArray, ...secondArray];
    let store = {};
    for (let i = 0; i < combined.length; i++) {
        let property = combined[i];
        if (i % 2 === 0) {
            if (!store.hasOwnProperty(property)) {
                store[property] = 0;
            }
        } else {
            let value = Number(property);
            let previousProp = combined[i - 1];
            store[previousProp] += value;
        }
    }
    for (const entry in store) {
        console.log(`${entry} -> ${store[entry]}`);
    }
}

storeProvisionParser([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);