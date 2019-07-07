import {
    GET_ARTICLE_LIST
} from "../Constants";

const data = {
    artclelist: []
}
const ArticleReducer = (state = data, action) => {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            return {
                ...state, artclelist: action.payload
            };

        default:
            return state;
    }
}
export default ArticleReducer;