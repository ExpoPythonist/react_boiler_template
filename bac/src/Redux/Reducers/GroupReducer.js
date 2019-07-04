import { CREATE_GROUP ,GET_GROUP_LIST,DELETE_GROUP,UPDATE_GROUP,PARENT_GROUP_LIST } from "../../config";

const GroupReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_GROUP: 
            return state = {
                ...state,
                success_group_create: action.payload
            }
        case DELETE_GROUP: 
            return state = {
                ...state,
                success_delete_type: action.payload
            }
        case UPDATE_GROUP: 
            return state = {
                ...state,
                success_update_type: action.payload
            }
        case GET_GROUP_LIST: 
            return state = {
                ...state,
                group_list: action.payload
            }
        case PARENT_GROUP_LIST: 
            return state = {
                ...state,
                parent_group_list: action.payload
            }
        default:
            return state;
    }
}
export default GroupReducer;