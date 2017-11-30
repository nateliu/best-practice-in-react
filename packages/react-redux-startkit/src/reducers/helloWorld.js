import {CHANGE_TEXT,BUTTON_CLICK} from '../constants';

const initialState = {
    text: 'Hello'
}

const helloWorld = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                text: state.text=='Hello' ? 'Hi':'Hello'
            }
        case BUTTON_CLICK:
            return {
                text: state.text =='Hello World' ? 'Hello Redux':'Hello World'
            }
        default:
            return initialState;
    }
}

export default helloWorld