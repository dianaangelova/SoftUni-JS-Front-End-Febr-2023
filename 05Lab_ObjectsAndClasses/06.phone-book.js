function phoneBookParser(input) {
    let phoneBook = {};
    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phoneNumber = tokens[1];
       phoneBook[name]=phoneNumber;

        //Ако трябваше да оставя оригинала,а не да замествам
        // if (!phoneBook.hasOwnProperty(name)){
        //     phoneBook.name=phoneNumber;
        // }
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBookParser(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);