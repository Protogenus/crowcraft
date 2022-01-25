import { Key } from "./Key";

export const EnterKey = ({ onClick }) => {
    return (
        <Key char="enter" onClick={onClick} />
    );
}