import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { urlReducer } from './Redux/Reducer';

const rootReducers = combineReducers({
 url: urlReducer
    
})
export const store =legacy_createStore(rootReducers, applyMiddleware(thunk));
