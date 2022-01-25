import "./Wordle.css"

import { Input, Word } from "./grid";
import { Keyboard } from "./keyboard";
import { useState } from "react";

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

export const Wordle = () => {
    const targetWord = "crimp";

    const [input, setInput] = useState("");
    const [words, setWords] = useState([targetWord]);

    const updateInput = input =>  {
        if (input.length <= 5) {
            setInput(input);
        }
    }

    const submitInput = input =>  {
        if (input.length === 5) {
            setInput("");
            setWords([...words, input]);
        }
    }

    const guessesLeft = MAX_GUESSES - words.length;

    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center">
                <div className="w-33 | flex">Info</div>
                <div className="w-33 title pen | flex justify-center ttu f2 fw6">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid usn | flex flex-column justify-center">
                {words.map(word => (
                    <div key={word} className="mb1">
                        <Word word={word} targetWord={targetWord} />
                    </div>
                ))}
                {guessesLeft > 0 ? 
                    <div className="input | mb1">
                        <Input word={input} maxInputLength={WORD_LENGTH} />
                    </div> : null
                }
                {[...Array(Math.max(guessesLeft - 1, 0))].map((_, i) => (
                    <div key={i} className="mb1">
                        <Word targetWord={targetWord} />
                    </div>
                ))}
            </div>
            <div className="keyboard usn | flex items-center">
                <Keyboard input={input} onInputChanged={updateInput} onInputSubmitted={submitInput} />
            </div>
        </div>
    );
}
