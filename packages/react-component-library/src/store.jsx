import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const loggerMiddleware = createLogger();
let store;
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
            )
        )
    );
} else {
    store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}

export default store;