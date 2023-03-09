function orders(product, number) {

    let singlePrice;
    switch (product) {
        case "coffee":
            singlePrice=1.50;
            break;
        case "water":
            singlePrice=1.00;
            break;
        case "coke":
            singlePrice=1.40;
            break;
        case "snacks":
            singlePrice=2.00;
            break;
    }

    return (number*singlePrice).toFixed(2);

}