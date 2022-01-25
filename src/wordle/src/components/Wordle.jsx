import "./Wordle.css"

import { Grid } from "./grid";
import { Keyboard } from "./keyboard";
import { useState } from "react";

const TARGET_WORD = "crimp"
const MAX_GUESSES = 6;

export const Wordle = () => {
    const [input, setInput] = useState("");
    const [words, setWords] = useState([TARGET_WORD]);

    const updateInput = input =>  {
        if (input.length <= TARGET_WORD.length) {
            setInput(input);
        }
    }

    const submitInput = input =>  {
        if (input.length === TARGET_WORD.length) {
            setInput("");
            setWords([...words, input]);
        }
    }

    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center">
                <div className="w-33 | flex">Info</div>
                <div className="w-33 title pen | flex justify-center ttu f2 fw6">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid usn | flex flex-column justify-center">
                <Grid words={words} input={input} targetWord={TARGET_WORD} maxGuesses={MAX_GUESSES} />
            </div>
            <div className="keyboard usn | flex items-center">
                <Keyboard input={input} onInputChanged={updateInput} onInputSubmitted={submitInput} />
            </div>
        </div>
    );
}
