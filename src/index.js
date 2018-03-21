import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './scss/style.scss';
import configureStore from './store/configureStore';
import App from './containers/App';
import Home from './containers/Home';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Home/>
        </App>
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();




