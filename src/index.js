import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './scss/style.scss';

//Reducers
import * as reducers from './reducers';

//Store
const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import App from './containers/App';
import Home from './containers/Home';



ReactDOM.render(
    <Provider store={store}>
        <App>
            <Home/>
        </App>
    </Provider>,
    document.getElementById('root')
);

module.hot.accept();




