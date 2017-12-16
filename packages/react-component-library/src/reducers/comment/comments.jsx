import { INIT_COMMNETS, ADD_COMMENT, DELETE_COMMENT } from '../../constants/comment/actionTypes';

// reducer
export default function commentsReducer(state, action) {
    if (!state) {
        state = { comments: [] }
    }
    switch (action.type) {
        case INIT_COMMNETS:
            return { comments: action.comments }
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.comment]
            }
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
        default:
            return state
    }
}