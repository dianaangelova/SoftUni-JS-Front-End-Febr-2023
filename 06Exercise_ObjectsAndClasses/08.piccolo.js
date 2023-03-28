function tracingParking(input) {
    let cars = [];
    for (const line of input) {
        let tokens = line.split(", ");
        let command = tokens[0];
        let carPlate = tokens[1];
        if (command === "IN" && !cars.includes(carPlate)) {
            cars.push(carPlate);
        } else if (command === "OUT" && cars.includes(carPlate)) {
            let index = cars.indexOf(carPlate);
            if (index !== -1) {
                cars.splice(index, 1);
            }
        }
    }

   if (cars.length === 0) {
        return console.log(`Parking Lot is Empty`);
    } else {
       let sortedPlates = cars.sort((carNumA, carNumB)=>carNumA.localeCompare(carNumB));
        for (const car of sortedPlates) {
            console.log(car);
        }
    }
}

tracingParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);