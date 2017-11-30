import {CHANGE_TEXT,BUTTON_CLICK} from '../constants';

export const changeText = text => {
    return {
        type:CHANGE_TEXT,
        text
    }
} 

export const buttonClick = text =>{
    return {
        type:BUTTON_CLICK,
        text
    }
}
