import { ADD_UPDATE_ARTICLE} from "../Constants.js";

const ArticleReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_UPDATE_ARTICLE:
            return state = {
                ...state,
                article_status: action.payload
            }
        default:
            return state;
    }
}
export default ArticleReducer;