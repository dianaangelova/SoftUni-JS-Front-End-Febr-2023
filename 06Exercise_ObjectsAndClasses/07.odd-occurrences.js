function oddOccurrences(input) {
    let wordsInInput = input.toLowerCase().split(" ");
    let words = {};
    let array =[];
    for (const word of wordsInInput) {
        let count = wordsInInput.filter((w) => w === word).length;
        if (count%2!=0 && !words.hasOwnProperty(word)){
            words[" "+word] = count;
        }
    }

    for (const word in words) {
        process.stdout.write(word);
    }


}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');