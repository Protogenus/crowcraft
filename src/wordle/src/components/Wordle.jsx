import "./Wordle.css"

export const Wordle = () => {
    return (
        <div className="container | flex flex-column items-center justify-between">
            <div className="header w-100 | flex justify-between items-center">
                <div className="w-33 | flex">Info</div>
                <div className="w-33 | flex justify-center ttu">Wordle</div>
                <div className="w-33 | flex justify-end">Settings</div>
            </div>
            <div className="grid | flex items-center">
                Grid
            </div>
            <div className="keyboard | flex items-center">
                Keyboard
            </div>
        </div>
    )
}
