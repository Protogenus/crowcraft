import { Key } from "./Key";
import { EnterKey } from "./EnterKey";
import { BackspaceKey } from "./BackspaceKey";

const BACKSPACE_KEY = "backspace";
const ENTER_KEY = "enter";

export const Keyboard = ({ input, onInputChanged, onInputSubmitted }) => {
    const keys = [
        [..."qwertyuiop"],
        [..."asdfghjkl"],
        [..."zxcvbnm"]
    ];

    const onKeyPressed = key => () => {
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
    };

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
