import { Letter } from "./Letter";
import { LetterStates } from "components/utils";

const FILL_LETTER = " ";

export const Input = ({ word, maxInputLength }) => {
    const letters = [...word];
    while (letters.length < maxInputLength) {
        letters.push(FILL_LETTER);
    }

    return (
        <div className="flex">
            {letters.map((letter, i) => (
                <div key={`${letter}-${i}`} className={i !== letters.length - 1 ? "mr1" : ""}>
                    <Letter letter={letter} letterState={LetterStates.UNKNOWN} />
                </div>
            ))}
        </div>
    );
}
