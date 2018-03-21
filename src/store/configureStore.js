import { createStore , combineReducers } from 'redux';
import * as reducers from './../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        initialState);

    if (module.hot) {
        module.hot.accept('./../reducers', () => {
            const nextRootReducer = require('./../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}