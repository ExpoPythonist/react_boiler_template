import { CREATE_CONTENT_TYPE,DELETE_CONTENT_TYPE_DATA,UPDATE_CONTENT_TYPE_DATA } from "../../config";

const ContentReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CONTENT_TYPE: 
            return state = {
                ...state,
                success_content_type: action.payload
            }
        case DELETE_CONTENT_TYPE_DATA: 
            return state = {
                ...state,
                success_delete_type: action.payload
            }
        case UPDATE_CONTENT_TYPE_DATA: 
            return state = {
                ...state,
                success_update_type: action.payload
            }
        default:
            return state;
    }
}
export default ContentReducer;
