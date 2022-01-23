import { Key } from "./Key";
import { EnterKey } from "./EnterKey";
import { BackspaceKey } from "./BackspaceKey";

export const Keyboard = () => {
    const keys = [
        [..."qwertyuiop"],
        [..."asdfghjkl"],
        [..."zxcvbnm"]
    ];

    return (
        <div>
            <div className="flex justify-center mb2">
                {keys[0].map(key => (
                    <Key key={key} char={key} />
                ))}
            </div>
            <div className="flex justify-center mb2">
                {keys[1].map(key => (
                    <Key key={key} char={key} />
                ))}
            </div>
            <div className="flex justify-center mb3">
                <EnterKey />
                {keys[2].map(key => (
                    <Key key={key} char={key} />
                ))}
                <BackspaceKey />
            </div>
        </div>
    )
};
