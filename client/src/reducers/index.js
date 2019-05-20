import { combineReducers } from 'redux';
import listReducer from './listReducer';
import postReducer from './postReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    list: listReducer,
    post: postReducer,
    error: errorReducer,
    auth: authReducer,
});