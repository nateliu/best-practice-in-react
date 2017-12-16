import { GET_INFO, FETCHING_DATA, RECEIVE_USER_DATA } from '../../constants/github/actionTypes';
import { fetchingData, receiveUserData } from '../../actions/github/actionCreators';

export function fetchUserInfo(username) {
    return function (dispatch) {
        dispatch(fetchingData(true));
        return fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(json => {
                console.log(json);
                return json;
            })
            .then((json) => {
                dispatch(receiveUserData(json))
            })
            .then(() => dispatch(fetchingData(false)))
    };
}

//reducer
export function profile(state = {}, action) {
    switch (action.type) {
        case GET_INFO:
            return {...state, 
                    username: action.username
            };
        case RECEIVE_USER_DATA:
            return {...state, ...action.profile};
        default: return state;
    }
}

export function isFetchingData(state = false, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return action.fetching;
        default: return state;
    }
}

export function username(state = '', action) {
    switch (action.type) {
        case GET_INFO:
            return action.username;
        default: return state;
    }
}