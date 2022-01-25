import { Key } from "./Key";
import { EnterKey } from "./EnterKey";
import { BackspaceKey } from "./BackspaceKey";
import { useCallback, useEffect } from "react";

const BACKSPACE_KEY = "Backspace";
const ENTER_KEY = "Enter";
const SUPPORTED_KEYS = [..."qwertyuiopasdfghjklzxcvbnm", BACKSPACE_KEY, ENTER_KEY];

export const Keyboard = ({ input, onInputChanged, onInputSubmitted }) => {
    const keys = [
        [..."qwertyuiop"],
        [..."asdfghjkl"],
        [..."zxcvbnm"]
    ];

    const onKeyPressed = useCallback(key => () => {
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
    }, [input, onInputChanged, onInputSubmitted]);

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
                    <Key key={key} char={key} onClick={onKeyPressed(key)} />
                ))}
            </div>
            <div className="flex justify-center mb2">
                {keys[1].map(key => (
                    <Key key={key} char={key} onClick={onKeyPressed(key)} />
                ))}
            </div>
            <div className="flex justify-center mb3">
                <EnterKey onClick={onKeyPressed(ENTER_KEY)} />
                {keys[2].map(key => (
                    <Key key={key} char={key} onClick={onKeyPressed(key)} />
                ))}
                <BackspaceKey onClick={onKeyPressed(BACKSPACE_KEY)} />
            </div>
        </div>
    )
};
