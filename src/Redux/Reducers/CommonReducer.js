import { ERROR_MESSAGE } from "../../config";

const CommonReducer = (state = {}, action) => {
    switch (action.type) {
        case ERROR_MESSAGE: 
            return state = {
                ...state,
                error_message: action.payload
            }
        default:
            return state;
    }
}
export default CommonReducer;
