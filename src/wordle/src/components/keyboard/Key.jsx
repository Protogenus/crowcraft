import "./Key.css";

export const Key = ({ char, onClick }) => {
    return (
        <div className="key | pa3 ttu fw5 flex justify-center items-center" onClick={onClick}>
            {char}
        </div>
    );
}