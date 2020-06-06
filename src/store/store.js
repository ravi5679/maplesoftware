import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import servicesReducer from './reducers/services';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers ({
  allservices: servicesReducer,
});

export default createStore (
  rootReducer,
  composeEnhancers (applyMiddleware (thunk))
);
