import {
    GET_ARTICLE_LIST,
    GET_SINGLE_ARTICLE
} from "../Constants";

const data = {
    artclelist: []
};
const ArticleReducer = (state = data, action) => {
    switch (action.type) {
        case GET_ARTICLE_LIST:
            return {
                ...state, artclelist: action.payload
            };
        case GET_SINGLE_ARTICLE:
            return {
                ...state, singlearticle: action.payload
            };

        default:
            return state;
    }
};
export default ArticleReducer;