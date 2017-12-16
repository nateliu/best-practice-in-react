import { INIT_COMMNETS, ADD_COMMENT, DELETE_COMMENT } from '../../constants/comment/actionTypes';

export const initComments = (comments) => {
    return { type: INIT_COMMNETS, comments }
}

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
    return { type: DELETE_COMMENT, commentIndex }
}