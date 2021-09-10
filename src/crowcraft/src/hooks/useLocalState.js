import { useState, useCallback } from "react";

export const useLocalState = (name, initialState = null, reviver = null) => {
    const jsonState = localStorage.getItem(name);

    if (jsonState) {
        initialState = JSON.parse(jsonState, reviver);
    }

    const [state, setState] = useState(initialState);

    const setLocal = useCallback(
        newState => {
            if (newState) {
                localStorage.setItem(name, JSON.stringify(newState));
            }
            else {
                localStorage.removeItem(name);
            }

            setState(newState);
        },
        [setState, name]
    );

    return [state, setLocal];
}
