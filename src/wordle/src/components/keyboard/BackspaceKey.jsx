import { ReactComponent as Backspace } from './backspace.svg'
import { Key } from "./Key";;

export const BackspaceKey = () => {
    return (
        <Key char={<Backspace />} />
    );
}
