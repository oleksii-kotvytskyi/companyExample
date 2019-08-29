import {CHANGE_UI_WIDTH, CHANGE_UI_LANGUAGE, WRITE_IN_CONTENT } from "../actions/types";
import { getWidth } from "../utils/Utils";

const localState = {
    ui: {
        language: 'en',
        width: getWidth(),
    },
    content: {
        header: {},
        sectionIntro: {},
        sectionAbout: {},
        sectionWhatWeDo: {},
        sectionJobs: {},
        sectionFooter: {},
    },
};

const reducer = (state = localState, action) => {

    switch (action.type) {

        case CHANGE_UI_WIDTH:
            return {...state, ui: {width: action.payload} };

        case CHANGE_UI_LANGUAGE:
            return {...state, ui: {language: action.payload} };

        case WRITE_IN_CONTENT:
            return {...state, content: action.payload };

        default:
            return state;
    }

};


export default reducer;