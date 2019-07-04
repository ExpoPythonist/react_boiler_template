import { 
    ARTICLE_REQUIRED_FIELD, 
    ARTICLE_APC_REQUEST_ORGANISATION, 
} from "../../config";

const CorrectionRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case ARTICLE_REQUIRED_FIELD: 
            return state = {
                ...state,
                article_required_field: action.payload
            }
        case ARTICLE_APC_REQUEST_ORGANISATION: 
            return state = {
                ...state,
                article_apc_request_organistion: action.payload
            }
        default:
            return state;
    }
}
export default CorrectionRequestReducer;