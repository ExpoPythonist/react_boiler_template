import {
    combineReducers
} from 'redux';
import AppReducer from "./AppReducer";
import AuthReducer from './AuthReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    user: UsersReducer,

})