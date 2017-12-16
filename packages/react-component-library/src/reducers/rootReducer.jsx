import { combineReducers} from 'redux';
import commentsReducer from './comment/comments';
import{ isFetchingData, username, profile} from './github/profileFinder';

const rootReducer = combineReducers({
    commentsReducer,
    isFetchingData,
    username,
    profile,
});

export default rootReducer;