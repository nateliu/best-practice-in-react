import { GO, CAUTION, STOP } from '../../constants/traffic/actionTypes';

const trafficReducer = (state = GO, action) => {
    switch (action.type) {
        case GO:
            state = GO
            break;

        case STOP:
            state = STOP
            break;

        case CAUTION:
            state = CAUTION;
            break;
    }
    return state;
}

export default trafficReducer;