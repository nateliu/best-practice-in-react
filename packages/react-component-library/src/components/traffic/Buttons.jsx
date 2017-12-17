import React, { Component } from 'react';
import { GO, CAUTION, STOP } from '../../constants/traffic/actionTypes';
import './Buttons.less';

const Buttons = ({
    go,
    caution,
    stop,
    lightStatus
}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className='trafficButton' onClick={go}
                disabled={lightStatus == GO || lightStatus == CAUTION}>
                Go
            </button>

            <button className='trafficButton' onClick={caution}
                disabled={lightStatus == CAUTION || lightStatus == STOP}>
                Caution
            </button>

            <button className='trafficButton' onClick={stop}
                disabled={lightStatus == STOP || lightStatus == GO}>
                Stop
            </button>
        </div>
    )
}

export default Buttons;