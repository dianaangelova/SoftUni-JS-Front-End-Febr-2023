function meetingsParser(input) {
    let meetings = {};
    for (const line of input) {
        let tokens = line.split(' ');
        let weekday = tokens[0];
        let name = tokens[1];
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

meetingsParser(['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
);