import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({

});

// Creating store and apply thunk redux middleware
const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
    
};

export default configureStore;