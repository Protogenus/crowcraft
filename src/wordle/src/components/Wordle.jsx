import "./Wordle.css"

import { Word } from "./Word";

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

export const Wordle = () => {
    const targetWord = "crimp";
    const words = [
        targetWord,
        "irate",
        "crisp",
        "droid",
        "ibibi",
        ""
    ];

    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center">
                <div className="w-33 | flex">Info</div>
                <div className="w-33 | flex justify-center ttu f2 fw7">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid | flex flex-column justify-center">
                {words.map((word, i) => (
                    <div className="mb1">
                        <Word key={i} wordLength={WORD_LENGTH} word={word} targetWord={targetWord} />
                    </div>
                ))}
            </div>
            <div className="keyboard | flex items-center">
                Keyboard
            </div>
        </div>
    );
}
