function employeesParser(input) {
    let employees = {};
    for (const line of input) {
        let name = line;
        let personalNumber = name.length;
        employees[name]=personalNumber;

    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

employeesParser([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);