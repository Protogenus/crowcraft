import { englishWords } from "./words.english";
import { frenchWords } from "./words.french";
import { spanishWords } from "./words.spanish";

export const Languages = {
    ENGLISH: "english",
    FRENCH: "french",
    SPANISH: "spanish",
}

export const Dictionaries = {
    [Languages.ENGLISH]: englishWords,
    [Languages.FRENCH]: frenchWords,
    [Languages.SPANISH]: spanishWords,
};