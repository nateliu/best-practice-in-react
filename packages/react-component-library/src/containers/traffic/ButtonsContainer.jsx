import { connect } from 'react-redux';
import Buttons from '../../components/traffic/Buttons';
import { goAction, cautionAction, stopAction } from '../../actions/traffic/actionCreators';

const mapStateToProps = state => {
    return {
        lightStatus: state.trafficReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        go: () => { dispatch(goAction) },
        caution: () => { dispatch(cautionAction) },
        stop: () => { dispatch(stopAction) }
    }
}

const ButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons);

export default ButtonsContainer;