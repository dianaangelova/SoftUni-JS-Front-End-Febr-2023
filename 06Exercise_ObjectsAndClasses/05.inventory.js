function parseInventory(input) {
    let heroes = [];
    for (const line of input) {

        let [hero, level, items] = line.split(" / ");
        level = Number(level);
        heroes.push({hero, level, items});
    }

    let sortedHeroes = heroes.sort((heroA, heroB) => heroA.level - heroB.level);

    //деструктуриране на обект
    for (const {hero, level, items} of sortedHeroes) {
        console.log(`Hero: ${hero}
level => ${level}
items => ${items}`);
    }
}

parseInventory([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);