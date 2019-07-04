import { 
    GET_AUTHOR_APC_REQUEST, 
} from "../../config";

const AuthorRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_AUTHOR_APC_REQUEST: 
            return state = {
                ...state,
                apc_requests: action.payload
            }
        default:
            return state;
    }
}
export default AuthorRequestReducer;