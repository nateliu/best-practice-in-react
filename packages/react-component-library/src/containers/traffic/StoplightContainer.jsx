import { connect } from 'react-redux';
import Stoplight from '../../components/traffic/Stoplight';
import { GO, CAUTION, STOP } from '../../constants/traffic/actionTypes';

const mapStateToProps = state => {
    return {
        goColor: state.trafficReducer == GO ? 'rgb(39,232,51)' : 'white',
        cautionColor: state.trafficReducer == CAUTION ? 'yellow' : 'white',
        stopColor: state.trafficReducer == STOP ? 'red' : 'white'
    }
}

const mapDispatchToProps = null;

const StoplightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stoplight);

export default StoplightContainer;