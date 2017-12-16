import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Profile from './Profile';
import  Search from './Search';
import './ProfileFinder.less';

export default class ProfileFinder extends Component {
    render() {
        const { fetchUserInfo, profile, isFetchingData } = this.props;
        return (
            <div className='container'>
                <Search fetchUserInfo={fetchUserInfo} isFetchingData={isFetchingData} />
                {'name' in profile ? 
                <Profile profile={profile} isFetchingData={isFetchingData} /> : 
                ''}
            </div>
        );
    }
}
