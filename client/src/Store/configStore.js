import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataCenter from './Reducers/dataCenter';

const rootReducer = combineReducers({
    dataCenter
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
    
};

export default configureStore;