function townsParser(input) {
    let towns=[];
    for (const line of input) {
        let tokens = line.split(" | ");
        let name = tokens[0];
        let latitude = tokens[1];
        let longitude = tokens[2];
        let town = {name, latitude, longitude};
        towns.push(town);
    }

    for (const town of towns) {
        console.log(`{ town: '${town.name}', latitude: '${Number(town.latitude).toFixed(2)}', longitude: '${Number(town.longitude).toFixed(2)}' }`);
    }
}

townsParser(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);