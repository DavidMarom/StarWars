import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducerA from '../store/reducers/reducer-films';
import reducerB from './reducers/reducer-pref';

const rootReducer = combineReducers({
    reducerA,
    reducerB
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
