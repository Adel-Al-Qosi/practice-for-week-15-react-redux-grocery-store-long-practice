import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import productReducer from './produce';

const rootReducer = combineReducers({
    produce: productReducer
})

// just for now:
const preloadedState = {}

let enhancer;

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger))
}


const configureStore = () => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore