function convertToObject(input) {

    let converted = JSON.parse(input);
    let keys = Object.entries(converted);
    keys.forEach(([key, value]) => console.log(`${key} -> ${value}`));

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');