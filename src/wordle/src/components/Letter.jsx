import "./Letter.css";

export const LetterStates = {
    UNKNOWN: "unknown",
    ABSENT: "absent",
    PRESENT: "present",
    CORRECT: "correct"
};

export const Letter = ({ letter, letterState = LetterStates.UNKNOWN }) => {
    return (
        <div className={`letter ${letterState} | flex justify-center items-center ttu f2 fw7`}>
            {letter}
        </div>
    );
}
