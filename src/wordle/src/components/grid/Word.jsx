import { Letter } from "./Letter";
import { getLetterStates, LetterStates } from "components/utils";

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
