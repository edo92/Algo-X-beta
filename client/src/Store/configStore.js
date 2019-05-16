import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataCenter from './Reducers/dataCenter';
import lineUp from './Reducers/lineUp';

const rootReducer = combineReducers({
    dataCenter,
    lineUp
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
    
};

export default configureStore;