import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/comment/CommentApp';
import ProfileFinderContainer from './containers/github/ProfileFinderContainer';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ProfileFinderContainer />
            <CommentApp/>
        </div>
    </Provider>,
    document.getElementById('app')
)