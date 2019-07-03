import {
    REQUEST_CREATE_USER,
    FAILED_CREATE_USER,
    GET_ALL_USER,
    CLEAR_FAILED_STATUS,
    REQUEST_UPDATE_USER,
    FAILED_UPDATE_USER,
    DELETE_USER_DATA
} from "../Constants";
const UsersReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CREATE_USER:
            return state = {
                ...state,
                new_user: action.payload
            }
        case FAILED_CREATE_USER:
            return state = {
                ...state,
                failed: action.payload
            }
        case GET_ALL_USER:
            return state = {
                ...state,
                users: action.payload
            }
        case CLEAR_FAILED_STATUS:
            return state = {
                ...state,
                failed: null
            }
        case REQUEST_UPDATE_USER:
            return state = {
                ...state,
                update_user: action.payload
            }
        case FAILED_UPDATE_USER:
            return state = {
                ...state,
                failed: action.payload
            }
        case DELETE_USER_DATA:
            const newState = state.users.filter((user) => {
                return user.id !== action.id
            })
            return state = {
                ...state,
                users: newState
            }
        default:
            return state;
    }
}
export default UsersReducer;