function employeesParser(input) {
    // let employees = {};
    // for (const line of input) {
    //     let name = line;
    //     let personalNumber = name.length;
    //     employees[name]=personalNumber;
    // }
    //Вместо с for може да редуцирам масива към обект чрез reduce функцията

    Object.entries(input.reduce((data, employee) => {
        data[employee] = employee.length;
        return data;
    }, {})).forEach(([employee, length]) => {
        console.log(`Name: ${employee} -- Personal Number: ${length}`);
    });
}

employeesParser([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);