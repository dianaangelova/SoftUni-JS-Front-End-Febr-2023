function solve(input) {

    let horseList = input.shift().split("|");

    input.forEach(line => {
            let tokens = [];
            tokens = line.split(' ');
            let command = tokens[0];
            // let product = tokens[1];

            while (!command.includes("Finish")) {

                switch (command) {
                    case "Retake":
                        let overtakingHorse = tokens[1];
                        let overtakenHorse = tokens[2];

                        let indexOvertakingHorse = horseList.indexOf(overtakingHorse);
                        let indexOvertakenHorse = horseList.indexOf(overtakenHorse);

                        if (indexOvertakingHorse < indexOvertakenHorse) {
                            // let tempIndexOvertakingHorse = indexOvertakingHorse;
                            // let tempIndexOvertakenHorse = indexOvertakenHorse;

                            horseList[indexOvertakingHorse] = overtakenHorse;
                            horseList[indexOvertakenHorse] = overtakingHorse;

                            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
                        }
                        break;
                    case "Trouble":
                        let horseName = tokens[1];
                        let indexHorseToDrop = horseList.indexOf(horseName);

                        if (indexHorseToDrop != 0) {
                            let horseNameToReplace = horseList[indexHorseToDrop - 1];
                            horseList[indexHorseToDrop - 1] = horseName;
                            horseList[indexHorseToDrop] = horseNameToReplace;
                            console.log(`Trouble for ${horseName} - drops one position.`);
                        }
                        break;
                    case "Rage":
                        let horseNameRage = tokens[1];

                        let indexHorseToRage = horseList.indexOf(horseNameRage);
                        let lastIndex = horseList.length - 1;

                        if (indexHorseToRage == lastIndex) {
                            console.log(`${horseNameRage} rages 2 positions ahead.`)
                        } else if (indexHorseToRage == lastIndex - 1) {
                            let horseNameToReplace = horseList[lastIndex];
                            horseList[lastIndex] = horseNameRage;
                            horseList[lastIndex - 1] = horseNameToReplace;
                            console.log(`${horseNameRage} rages 2 positions ahead.`);
                        } else {
                            let horseNamePlusOne = horseList[indexHorseToRage + 1];
                            let horseNamePlusTwo = horseList[indexHorseToRage + 2];
                            horseList[indexHorseToRage + 2] = horseNameRage;
                            horseList[indexHorseToRage + 1] = horseNamePlusTwo;
                            horseList[indexHorseToRage] = horseNamePlusOne;
                            console.log(`${horseNameRage} rages 2 positions ahead.`);

                        }
                        break;
                    case "Miracle":
                        let miracleHorse = horseList.shift();
                        horseList.push(miracleHorse);
                        console.log(`What a miracle - ${miracleHorse} becomes first.`);
                        break;
                }
            }


        }
    )

    let print = horseList.join("->");
    console.log(print);

    console.log(`The winner is: ${horseList[horseList.length - 1]}`)

}


solve((['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])
);