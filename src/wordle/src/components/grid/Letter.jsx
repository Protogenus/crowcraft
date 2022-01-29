import "./Letter.css";

import { LetterStates } from "components/utils";

export const Letter = ({ letter, letterState = LetterStates.UNKNOWN }) => {
    const emptyClassName = !letter || letter === " " ? "empty" : "";

    return (
        <div className={`letter ${letterState} ${emptyClassName} | flex justify-center items-center ttu f2 fw7`}>
            {letter}
        </div>
    );
}
