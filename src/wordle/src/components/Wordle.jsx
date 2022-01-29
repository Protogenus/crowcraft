import "./Wordle.css"

import { Grid } from "./grid";
import { Keyboard } from "./keyboard";
import { useEffect, useState } from "react";

import { Languages, Dictionaries } from "dictionaries";
import { shuffleInPlace, encode, decode } from "./utils";

const QUERY = "seed";
const LANGUAGE = "lang";
const MAX_GUESSES = 6;

export const Wordle = () => {
    const [language, setLanguage] = useState(getLanguage(Languages.FRENCH));
    const [dictionary, setDictionary] = useState(Dictionaries[language]);
    const [targetWord, setTargetWord] = useState(getTargetWord(dictionary));
    const [input, setInput] = useState("");
    const [words, setWords] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        console.log("Target word:", targetWord);
        setQueryParam(QUERY, encode(targetWord));
    }, [targetWord]);
    
    useEffect(() => {
        console.log("Language:", language);
        setQueryParam(LANGUAGE, language);
    }, [language]);

    const updateInput = input =>  {
        if (input.length <= targetWord.length) {
            setInput(input);
        }
    };

    const submitInput = input =>  {
        if (input.length === targetWord.length && dictionary.includes(input)) {
            setGameOver(input === targetWord || words.length + 1 === MAX_GUESSES);
            setWords([...words, input]);
            setInput("");
        }
    };

    const restart = () => {
        setInput("");
        setWords([]);
        setGameOver(false)
        setTargetWord(getRandomWord(dictionary));
    };

    const changeLanguage = (e) => {
        const newLanguage = e.target.value;
        const newDictionary = Dictionaries[newLanguage];

        setLanguage(newLanguage);
        setDictionary(newDictionary);

        setInput("");
        setWords([]);
        setGameOver(false)
        setTargetWord(getRandomWord(newDictionary));
    }

    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center ph2">
                <div className="w-33 | flex">
                    <div className="button usn | pointer pa2 flex items-center justify-center" onClick={restart}>
                        New Game
                    </div>
                </div>
                <div className="w-33 title pen | flex justify-center ttu f2 fw6">Wordle</div>
                <div className="w-33 | flex justify-end">
                <select value={language} onChange={changeLanguage}>
                    <option value={Languages.ENGLISH}>English</option>
                    <option value={Languages.FRENCH}>Français</option>
                    <option value={Languages.SPANISH}>Español</option>
                </select>
                </div>
            </div>
            <div className="grid usn | flex flex-column justify-center">
                <Grid words={words} input={input} targetWord={targetWord} maxGuesses={MAX_GUESSES} />
            </div>
            <div className="keyboard usn | flex items-center">
                <Keyboard input={input} onInputChanged={updateInput} onInputSubmitted={submitInput} disabled={gameOver} words={words} targetWord={targetWord} language={language} />
            </div>
        </div>
    );
}

function getLanguage(defaultLanguage) {
    const queryParams = new URLSearchParams(window.location.search);

    return queryParams.get(LANGUAGE) || defaultLanguage;
}

function getTargetWord(dictionary) {
    const queryParams = new URLSearchParams(window.location.search);
    const targetWord = decode(queryParams.get(QUERY) || "");
    if (targetWord && dictionary.includes(targetWord)) {
        return targetWord;
    }

    return getRandomWord(dictionary);
}

function getRandomWord(dictionary) {
    return shuffleInPlace([...dictionary])[0];
}

function setQueryParam(key, value) {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(key, value);
    window.history.replaceState(null, null, "?"+queryParams.toString());
}
