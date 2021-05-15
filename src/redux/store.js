import { applyMiddleware, createStore, combineReducers } from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
)

export default store;