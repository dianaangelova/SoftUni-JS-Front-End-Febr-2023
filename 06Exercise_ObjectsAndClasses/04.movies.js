function moviesParser(input) {
    let movies = [];
    for (const line of input) {
        let name = "";
        let director = "";
        let date = "";
        if (line.startsWith("addMovie")) {
            name = line.replace("addMovie ", "");
            let movie = {name};
            movies.push(movie);
        } else if (line.includes(" directedBy ")) {
            let index = line.indexOf(" directedBy ");
            name = line.slice(0, index);
            director = line.slice(index + 12);
            let movie = movies.find((m) => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes(" onDate ")) {
            let index = line.indexOf(" onDate ");
            name = line.slice(0, index);
            date = line.slice(index + 8);
            let movie = movies.find((m) => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {
        if (movie.date!==undefined && movie.director!==undefined){
            let convertedToJSON = JSON.stringify(movie);
            console.log(convertedToJSON);
        }
    }

}

moviesParser([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]

);