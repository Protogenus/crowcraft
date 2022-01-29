const ENCODED_PART_LENGTH = 2;
const ALPHABET_SIZE = 26;
const FIRST_LETTER_OFFSET = 97;
const ENCODING_SECRET = 43;

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
export function shuffleInPlace(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

export function encode(secret) {
    let encoded = "";
    for (let i = 0; i < secret.length; i++) {
        const charCode =  secret.charCodeAt(i) - FIRST_LETTER_OFFSET + ENCODING_SECRET % ALPHABET_SIZE;
        encoded += padded(charCode, ENCODED_PART_LENGTH);
    }

    return encoded;
}

function padded(number, stringLength) {
    let padded = number.toString();
    while (padded.length < stringLength) { 
        padded = "0" + padded;
    }

    return padded;
}

export function decode(encoded) {
    let decoded = "";
    for (let i = 0; i < encoded.length; i += ENCODED_PART_LENGTH) {
        let charCode = parseInt(encoded.substring(i, i + ENCODED_PART_LENGTH)) - ENCODING_SECRET;
        while (charCode < 0) {
            charCode += ALPHABET_SIZE;
        }

        decoded += String.fromCharCode(charCode + FIRST_LETTER_OFFSET);
    }

    return decoded;
}

export const LetterStates = {
    UNKNOWN: "unknown",
    ABSENT: "absent",
    PRESENT: "present",
    CORRECT: "correct"
};

export const LetterStateRanks = {
    [LetterStates.UNKNOWN]: 0,
    [LetterStates.ABSENT]: 1,
    [LetterStates.PRESENT]: 2,
    [LetterStates.CORRECT]: 3
}

export const getLetterStates = (word = "", targetWord) => {
    if (!word) {
        return [];
    }

    const lettersToValidate = [...targetWord].reduce((acc, letter) => {
        if (!acc[letter]) {
            acc[letter] = 0;
        }

        acc[letter] += 1;

        return acc
    }, {});

    // Assume absent
    const letters = [...word].map((letter) => ({
        value: letter,
        state: LetterStates.ABSENT
    }));

    // Check for correct
    letters.forEach((letter, i) => {
        if (targetWord[i] === letter.value) {
            lettersToValidate[letter.value] -= 1;
            letter.state = LetterStates.CORRECT;
        }
    });

    // Check for present, only override LetterStates.ABSENT
    // Can only show 1 occurence of a present letter, even if there's two
    letters.forEach((letter, i) => {
        if (letter.state === LetterStates.ABSENT && lettersToValidate[letter.value] > 0 && targetWord.includes(letter.value)) {
            lettersToValidate[letter.value] = 0;
            letter.state = LetterStates.PRESENT;
        }
    });

    return letters;
}