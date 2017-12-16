//action types
export const GET_INFO = 'GET_INFO';
export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

// action creators
export function getInfo(username) {
    return {
        type: GET_INFO,
        username,
    };
}

export function fetchingData(fetching) {
    return {
        type: FETCHING_DATA,
        fetching,
    };
}

export function receiveUserData(profile) {
    return {
        type: RECEIVE_USER_DATA,
        profile,
    };
}

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