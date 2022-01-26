import "./Wordle.css"

import { Grid } from "./grid";
import { Keyboard } from "./keyboard";
import { useState } from "react";
import { english_words } from "./words.english";
import { shuffleInPlace, encode, decode } from "./utils";

const QUERY = "seed";
const MAX_GUESSES = 6;

export const Wordle = () => {
    const [target_word] = useState(getTargetWord());
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    console.log(target_word);
    setQueryParam(QUERY, encode(target_word));

    const updateInput = input =>  {
        if (input.length <= target_word.length) {
            setInput(input);
        }
    }

    const submitInput = input =>  {
        if (input.length === target_word.length && english_words.includes(input)) {
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
                <Grid words={words} input={input} targetWord={target_word} maxGuesses={MAX_GUESSES} />
            </div>
            <div className="keyboard usn | flex items-center">
                <Keyboard input={input} onInputChanged={updateInput} onInputSubmitted={submitInput} />
            </div>
        </div>
    );
}

function getTargetWord() {
    const queryParams = new URLSearchParams(window.location.search);
    const target_word = decode(queryParams.get(QUERY) || "");
    if (target_word && english_words.includes(target_word)) {
        return target_word;
    }

    return shuffleInPlace([...english_words])[0];
}

function setQueryParam(key, value) {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(key, value);
    window.history.replaceState(null, null, "?"+queryParams.toString());
}
