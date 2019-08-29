import {CHANGE_UI_WIDTH} from "./types";


export function changeUIWidth(payload) {
    return { type: CHANGE_UI_WIDTH, payload };
}
