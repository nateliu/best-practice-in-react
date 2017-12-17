import React,{ Component } from 'react';
import ButtonsContainer from './ButtonsContainer';
import StoplightContainer from './StoplightContainer';

export default class TrafficApp extends Component {   
    render() {
        return (
            <div>
                <StoplightContainer />
                <ButtonsContainer />
            </div>
        );
    }   
}