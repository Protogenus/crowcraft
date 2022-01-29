import "./Wordle.css"

import { Grid } from "./grid";
import { Keyboard } from "./keyboard";
import { useEffect, useState } from "react";
import { englishWords } from "./words.english";
import { shuffleInPlace, encode, decode } from "./utils";

const QUERY = "seed";
const MAX_GUESSES = 6;

export const Wordle = () => {
    const [targetWord, setTargetWord] = useState(getTargetWord());
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        console.log(targetWord);
        setQueryParam(QUERY, encode(targetWord));
    }, [targetWord]);

    const updateInput = input =>  {
        if (input.length <= targetWord.length) {
            setInput(input);
        }
    };

    const submitInput = input =>  {
        if (input.length === targetWord.length && englishWords.includes(input)) {
            setGameOver(input === targetWord);
            setWords([...words, input]);
            setInput("");
        }
    };

    const restart = () => {
        setInput("");
        setWords([]);
        setGameOver(false)
        setTargetWord(getRandomWord());
    };

    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center ph2">
                <div className="w-33 | flex">
                    <div className="button | pointer pa2 flex items-center justify-center" onClick={restart}>
                        New Game
                    </div>
                </div>
                <div className="w-33 title pen | flex justify-center ttu f2 fw6">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid usn | flex flex-column justify-center">
                <Grid words={words} input={input} targetWord={targetWord} maxGuesses={MAX_GUESSES} />
            </div>
            <div className="keyboard usn | flex items-center">
                <Keyboard input={input} onInputChanged={updateInput} onInputSubmitted={submitInput} disabled={gameOver} words={words} targetWord={targetWord} />
            </div>
        </div>
    );
}

function getTargetWord() {
    const queryParams = new URLSearchParams(window.location.search);
    const targetWord = decode(queryParams.get(QUERY) || "");
    if (targetWord && englishWords.includes(targetWord)) {
        return targetWord;
    }

    return getRandomWord();
}

function getRandomWord() {
    return shuffleInPlace([...englishWords])[0];
}

function setQueryParam(key, value) {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(key, value);
    window.history.replaceState(null, null, "?"+queryParams.toString());
}
