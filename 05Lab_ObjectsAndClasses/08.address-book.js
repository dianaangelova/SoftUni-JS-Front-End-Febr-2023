function addressBookParser(input) {
    let addressBook = {};
    for (const line of input) {
        let tokens = line.split(':');
        let name = tokens[0];
        let addressNumber = tokens[1];
        addressBook[name] = addressNumber;
    }

    let sortedNames = Object.keys(addressBook)
        .sort((entryA, entryB) => entryA.localeCompare(entryB
        ));

    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBook[name]}`);
    }
}

addressBookParser(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']

);