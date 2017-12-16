import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserInfo, getInfo } from '../../reducers/github/profileFinder';
import ProfileFinder from '../../components/github/ProfileFinder';

function mapStateToProps(state) {
  return {
    profile: state.profile,
    isFetchingData: state.isFetchingData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserInfo: (username) => dispatch(fetchUserInfo(username))
  };
}

export class ProfileFinderContainer extends Component {
  render() {
    console.log(this.state);
    return (<ProfileFinder/>);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFinder);