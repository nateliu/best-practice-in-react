import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({text,onButtonClick,onChangeText}) =>{
    return (
        <div>
            <h3 onClick={ e=>{e.preventDefault(), onChangeText()} }> {text} </h3>
            <button className='btn btn-primary' onClick={ e=>{
                e.preventDefault()
                 onButtonClick() }}>Click me</button>
        </div>
    )
}

export default Hello

