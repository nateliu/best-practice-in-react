import { GET_INFO, FETCHING_DATA, RECEIVE_USER_DATA } from '../../constants/github/actionTypes';

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
