import { createStore, applyMiddleware } from 'redux';
import rootReducers from './Reducers/rootReducers';
import thunk from 'redux-thunk';
const middleware = [thunk];
export default createStore(rootReducers, applyMiddleware(...middleware));
