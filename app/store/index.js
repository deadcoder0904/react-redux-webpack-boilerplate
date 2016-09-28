import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import allReducers from '../reducers/'

// InitialState
const initialState = {counter: 0};

const createStoreWithMiddleWare = applyMiddleware(thunk,logger())(createStore);
const store = createStoreWithMiddleWare(allReducers,initialState,
    									window.devToolsExtension && window.devToolsExtension());

export default store