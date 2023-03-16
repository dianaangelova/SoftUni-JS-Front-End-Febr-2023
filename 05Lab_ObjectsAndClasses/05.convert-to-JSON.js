function convertToJSON(firstName, lastName, hairColor) {

    let person = {name:firstName, lastName, hairColor};
    let convertedToJSON = JSON.stringify(person);

    console.log(convertedToJSON);
}

convertToJSON("James", "J", "Brown");