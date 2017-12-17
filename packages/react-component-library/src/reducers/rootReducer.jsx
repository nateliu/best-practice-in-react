import { combineReducers} from 'redux';
import commentsReducer from './comment/comments';
import{ isFetchingData, username, profile} from './github/profileFinder';
import trafficReducer from './traffic/traffic';

const rootReducer = combineReducers({
    commentsReducer,
    isFetchingData,
    username,
    profile,
    trafficReducer
});

export default rootReducer;