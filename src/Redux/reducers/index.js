import {
    combineReducers
} from 'redux';
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer';
import ArticleReducer from './articleReducer';

export default combineReducers({
    auth: AuthReducer,
    articles: ArticleReducer,
    form: formReducer
})