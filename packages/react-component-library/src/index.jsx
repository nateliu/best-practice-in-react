import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/comment/CommentApp';
import ProfileFinderContainer from './containers/github/ProfileFinderContainer';
import TrafficApp from './containers/traffic/TrafficApp';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ProfileFinderContainer />
            <CommentApp/>
            <TrafficApp/>
        </div>
    </Provider>,
    document.getElementById('app')
)