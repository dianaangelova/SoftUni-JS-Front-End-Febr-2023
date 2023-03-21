function songParser(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = Number(input[0]);
    let songsList = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        let tokens = input[i].split('_');
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];
        let song = new Song(typeList, name, time);
        songsList.push(song);
    }

    let requiredTypeList = input[input.length - 1];

    for (const song of songsList) {
        if (song.typeList === requiredTypeList) {
            console.log(`${song.name}`);
        } else if (requiredTypeList === "all") {
            console.log(`${song.name}`);
        }
    }
}

songParser([3, 'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'all']
);