import React, { Component } from 'react';
import  {PropTypes } from 'prop-types';
import './Search.less';

export default class Search extends Component {

    handleClick() {
        const node = this.refs.username;
        const text = node.value.trim();
        this.props.fetchUserInfo(text);
        node.value = '';
    }

    render() {
        return (
            <div className='search-box'>
                <input type='text' ref='username' required></input>
                <button onClick={() => this.handleClick()}>{this.props.isFetchingData ? 'Fetching' : 'Search'}</button>
            </div>
        );
    }
}