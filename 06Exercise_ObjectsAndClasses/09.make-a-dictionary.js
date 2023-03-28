function parseDictionary(input) {
    let dictionary = {};

    for (let index = 0; index < input.length; index++) {
        let result = JSON.parse(input[index]);
        let keys = Object.keys(result);
        dictionary[keys[0]] = Object.values(result)[0];
    }
    const entries = Object.entries(dictionary).sort((a, b) =>
        a[0].localeCompare(b[0])
    );
    for (const [key, value] of entries) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

parseDictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);