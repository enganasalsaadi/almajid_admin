import {combineReducers} from 'redux';
import authReducer from './auth/reducer'; 
import productReducer from './product/reducer'; 
import userReducer from './user/reducer'; 

const appReducer = combineReducers({
    auth: authReducer,
    product:productReducer ,
    user:userReducer 
});

export default appReducer;
