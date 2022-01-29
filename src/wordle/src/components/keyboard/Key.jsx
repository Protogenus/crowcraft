import { LetterStates } from "components/utils";
import "./Key.css";

export const Key = ({ char, onClick, letterState = LetterStates.UNKNOWN }) => {
    return (
        <div className={`key ${letterState} | pa3 ttu fw5 flex justify-center items-center`} onClick={onClick}>
            {char}
        </div>
    );
}