import "./Key.css";

export const Key = ({ char }) => {
    return (
        <div className="key | pa3 ttu fw5 flex justify-center items-center">
            {char}
        </div>
    );
}