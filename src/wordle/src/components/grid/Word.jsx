import { Letter, LetterStates } from "./Letter";

const FILL_LETTER = " ";

export const Word = ({ word, targetWord }) => {
    let letters = getLetterStates(word, targetWord);
    if (!word) {
        letters = [...Array(targetWord.length)].map(() => ({
            value: FILL_LETTER,
            state: LetterStates.UNKNOWN
        }));
    }

    return (
        <div className="flex">
            {letters.map((letter, i) => (
                <div key={`${letter.value}-${i}`} className={i !== targetWord.length - 1 ? "mr1" : ""}>
                    <Letter letter={letter.value} letterState={letter.state} />
                </div>
            ))}
        </div>
    );
}

const getLetterStates = (word = "", targetWord) => {
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
