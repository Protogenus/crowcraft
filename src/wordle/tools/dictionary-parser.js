const fs = require('fs')

// Try the dict mentioned here instead? https://towardsdatascience.com/hacking-wordle-f759c53319d0

try {
    // https://github.com/dwyl/english-words/blob/master/words_dictionary.json
    const data = fs.readFileSync('./english-dictionary.json', 'utf8');
    const dict = JSON.parse(data);
    let five_letter_dict = [];
    for (const word of Object.keys(dict)) {
        if (word.length === 5) {
            five_letter_dict.push(word)
        }
    }

    const names = {
        ...parse(fs.readFileSync('./names/canada.csv', 'utf8')),
        ...parse(fs.readFileSync('./names/spain01.csv', 'utf8')),
        ...parse(fs.readFileSync('./names/spain02.csv', 'utf8')),
        ...parse(fs.readFileSync('./names/usa.csv', 'utf8')),
    };

    five_letter_dict = five_letter_dict.filter(word => !names[word]);

    console.log(`The dictionary contains ${five_letter_dict.length} 5 letter words`);
    fs.writeFileSync('./english-five-letter-words.json', JSON.stringify(five_letter_dict));
} catch (err) {
    console.error(err)
}

function parse(csv) {
    const [header, ...data] = csv.split("\r\n");

    return data.reduce((acc, row) => {
        const name = row.split(",")[1];

        if (name.length === 5) { 
            acc[name] = name;
        }

        return acc;
    }, {});
}