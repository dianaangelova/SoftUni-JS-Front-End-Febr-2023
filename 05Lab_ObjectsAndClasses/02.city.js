function city(city) {
    let keys = Object.entries(city);
     keys.forEach(([key, value]) => console.log(`${key} -> ${value}`));
}

city({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
)