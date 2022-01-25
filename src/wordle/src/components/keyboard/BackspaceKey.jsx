import "./BackspaceKey.css";

import { ReactComponent as Backspace } from './backspace.svg';
import { Key } from "./Key";

export const BackspaceKey = ({ onClick }) => {
    return (
        <Key char={<Backspace className="backspace" />} onClick={onClick} />
    );
}
