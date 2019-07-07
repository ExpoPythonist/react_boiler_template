import {
    combineReducers
} from 'redux';
import AuthReducer from './AuthReducer';
import ArticleReducer from './articleReducer';

export default combineReducers({
    auth: AuthReducer,
    articles: ArticleReducer
})