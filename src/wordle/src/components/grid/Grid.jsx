import { Word } from "./Word";
import { Input } from "./Input";

export const Grid = ({ words, input, targetWord, maxGuesses }) => {
    const guessesLeft = maxGuesses - words.length;

    return (
        <>
            {words.map((word, i) => (
                <div key={`${word}-${i}`} className="mb1">
                    <Word word={word} targetWord={targetWord} />
                </div>
            ))}
            {guessesLeft > 0 ? 
                <div className="input | mb1">
                    <Input word={input} maxInputLength={targetWord.length} />
                </div> : null
            }
            {[...Array(Math.max(guessesLeft - 1, 0))].map((_, i) => (
                <div key={i} className="mb1">
                    <Word targetWord={targetWord} />
                </div>
            ))}
        </>
    );
};
