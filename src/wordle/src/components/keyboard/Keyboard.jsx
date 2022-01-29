import { Key } from "./Key";
import { EnterKey } from "./EnterKey";
import { BackspaceKey } from "./BackspaceKey";
import { useCallback, useEffect } from "react";
import { getLetterStates, LetterStateRanks } from "components/utils";
import { Languages } from "dictionaries";

const BACKSPACE_KEY = "Backspace";
const ENTER_KEY = "Enter";
const SUPPORTED_KEYS = [..."qwertyuiopasdfghjklzxcvbnm", BACKSPACE_KEY, ENTER_KEY];

export const Keyboard = ({ input, onInputChanged, onInputSubmitted, disabled, words, targetWord, language }) => {
    const keys = [
        [..."qwertyuiop"],
        [..."asdfghjkl"],
        [..."zxcvbnm"]
    ];

    if (language === Languages.SPANISH) {
        keys[1].push("\xf1");
    }

    const keyboardLetterStates = getKeyboardLetterStates(words, targetWord);

    const onKeyPressed = useCallback(key => () => {
        if (disabled) {
            return;
        }

        switch(key) {
            case BACKSPACE_KEY:
                onInputChanged(input.slice(0, -1));
                break;
            case ENTER_KEY:
                onInputSubmitted(input);
                break;
            default:
                onInputChanged(input + key);
        }
    }, [input, onInputChanged, onInputSubmitted, disabled]);

    useEffect(() => {
        const onKeydown = ({ key }) => { 
            if (SUPPORTED_KEYS.includes(key)) {
                onKeyPressed(key)();
            }
        }

        document.addEventListener("keydown", onKeydown);

        return () => document.removeEventListener("keydown", onKeydown);
    }, [onKeyPressed]);

    return (
        <div>
            <div className="flex justify-center mb2">
                {keys[0].map(key => (
                    <Key key={key} char={key} letterState={keyboardLetterStates[key]} onClick={onKeyPressed(key)} />
                ))}
            </div>
            <div className="flex justify-center mb2">
                {keys[1].map(key => (
                    <Key key={key} char={key} letterState={keyboardLetterStates[key]} onClick={onKeyPressed(key)} />
                ))}
            </div>
            <div className="flex justify-center mb3">
                <EnterKey onClick={onKeyPressed(ENTER_KEY)} />
                {keys[2].map(key => (
                    <Key key={key} char={key} letterState={keyboardLetterStates[key]} onClick={onKeyPressed(key)} />
                ))}
                <BackspaceKey onClick={onKeyPressed(BACKSPACE_KEY)} />
            </div>
        </div>
    )
};

function getKeyboardLetterStates(words, targetWord) {
    if (words.length === 0) {
        return {};
    }

    const letterStates = words.map(word => getLetterStates(word, targetWord));
    const keyboardLetterStates = {};
    for (let i = 0; i < letterStates.length; i++) {
        for (let j = 0; j < letterStates[i].length; j++) {
            const { value, state } = letterStates[i][j];
            if (!keyboardLetterStates[value]) {
                keyboardLetterStates[value] = state;
            } else if (LetterStateRanks[keyboardLetterStates[value]] < LetterStateRanks[state]) {
                keyboardLetterStates[value] = state;
            }
        }
    }

    return keyboardLetterStates;
}