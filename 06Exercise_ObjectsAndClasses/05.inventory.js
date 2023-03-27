function parseInventory(input) {
    let heroes = [];
    for (const line of input) {
        let tokens = line.split(" / ");
        let name = tokens[0];
        let age = tokens[1];
        let items = tokens[2];
        let hero = {name, age, items};
        heroes.push(hero);
    }

    let entries = Object.entries(heroes);
    let sortedHeroes =entries.sort((heroA, heroB) =>{
        let heroAAge = Number(heroA[1].age);
        let heroBAge = Number(heroB[1].age);
        return (heroAAge- heroBAge);
    });

    for (const element of sortedHeroes) {
        console.log(`Hero: ${element[1].name}
level => ${element[1].age}
items => ${element[1].items}`);
    }
}

parseInventory([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);