import { connect } from 'react-redux';
import Hello from '../components/Hello';
import {buttonClick,changeText} from '../actions/helloWorldAction'

function mapStateToProps(state) {
    return { text: state.helloWorld.text }
}

function mapDispatchToProps(dispatch){
    return{
        onButtonClick:text=>dispatch(buttonClick(text)),
        onChangeText:text=>dispatch(changeText(text))
    }
}

const HelloWorld = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default HelloWorld;