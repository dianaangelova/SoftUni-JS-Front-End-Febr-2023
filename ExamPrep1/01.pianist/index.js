function solve(input) {
    //remove the first line which gives the number of pieces
    let rows = Number(input.shift());

    // Map, associative array will contain the pieces
    let piecesMap = {};

    // Add to map
    for (let index = 0; index < rows; index++) {
        //remove the pieces from the input and split them into piece, composer, key
        let [piece, composer, key] = input.shift().split('|');

        // add the 3 items in the map. The piece is the key and {composer,key} is the value, which is also an object
        piecesMap[piece] = {composer, key};
    }

    // Parse commands
    // For each line in the input split the data in the line and add them into array tokens
    input.forEach(line => {
        let tokens = [];
        tokens = line.split('|');
        // take and remove the first word from the array tokens
        let command = tokens.shift();

        if (command === 'Add') {
            //destructuring the array into piece, composer, key
            let [piece, composer, key] = tokens;

            // if it does not exist -> add it else console.log
            if (!piecesMap.hasOwnProperty(piece)) {
                piecesMap[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            // just one item in the array token which is the piece
            let piece = tokens.shift();

            if (!piecesMap.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                //delete from the map where piece is the key
                delete piecesMap[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command === 'ChangeKey') {
            //destructuring the array tokens into piece, newKey
            let [piece, newKey] = tokens;

            if (!piecesMap.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                // change the value of the object which is held in an object
                piecesMap[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    });

    // the object is converted into array
    let entries = Object.entries(piecesMap);

    //forOf for array
    //the name of the embedded object is called info
    for (const [piece, info] of entries) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

solve([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
    ]
);