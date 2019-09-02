import { CHANGE_UI_WIDTH, CHANGE_UI_LANGUAGE, WRITE_IN_CONTENT } from "./types";


export function changeUIWidth(payload) {
    return { type: CHANGE_UI_WIDTH, payload };
}

export function changeUILanguage(payload) {
    return { type: CHANGE_UI_LANGUAGE, payload };
}

export function changeUIContent(payload) {
    return { type: WRITE_IN_CONTENT, payload };
}
