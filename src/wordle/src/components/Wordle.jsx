import "./Wordle.css"

import { Row } from "./Row";

const MAX_GUESSES = 6

export const Wordle = () => {
    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center">
                <div className="w-33 | flex">Info</div>
                <div className="w-33 | flex justify-center ttu">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid | flex flex-column justify-center">
                {[...Array(MAX_GUESSES)].map((_, i) => <Row key={i} />)}
            </div>
            <div className="keyboard | flex items-center">
                Keyboard
            </div>
        </div>
    )
}
