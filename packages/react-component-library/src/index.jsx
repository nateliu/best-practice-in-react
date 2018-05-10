import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/comment/CommentApp';
import ProfileFinderContainer from './containers/github/ProfileFinderContainer';
import TrafficApp from './containers/traffic/TrafficApp';
import LocalFormatedDate from './containers/LocalFormatedDate';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <LocalFormatedDate />
            <ProfileFinderContainer />
            <CommentApp/>
            <TrafficApp/>
        </div>
    </Provider>,
    document.getElementById('app')
)