import { 
    ERROR_GET, 
    ERROR_POST, 
    ERROR_PUT,
    ERROR_DELETE
} from "../../config";

const ErrorReducer = (state = {}, action) => {
    switch (action.type) {
        case ERROR_GET: 
            return state = {
                ...state,
                error_get_message: action.payload
            }
        case ERROR_POST: 
            return state = {
                ...state,
                error_post_message: action.payload
            }
        case ERROR_PUT: 
            return state = {
                ...state,
                error_put_message: action.payload
            }
        case ERROR_DELETE: 
            return state = {
                ...state,
                error_delete_message: action.payload
            }
        default:
            return state;
    }
}
export default ErrorReducer;