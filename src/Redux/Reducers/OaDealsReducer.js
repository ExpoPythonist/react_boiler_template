import { 
    GET_COUNTER_ORG_LIST, 
    GET_DEAL_TYPE, 
    GET_OADEAL_LIST, 
    GET_OADEAL, 
    GET_CURRENCY, 
    CREATE_OA_DEAL, 
    UPDATE_OA_DEAL, 
    GET_OA_DEAL_FILTERED_LIST, 
    GET_OA_DEAL_APPROVED_LIST, 
    GET_OA_DEAL_APPROVAL, 
    GET_OA_DEAL_REJECT, 
    FAILED_CREATE_OA_DEAL
} from "../../config";

const OaDealsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COUNTER_ORG_LIST: 
            return state = {
                ...state,
                counter_org: action.payload
            }
        case GET_DEAL_TYPE: 
            return state = {
                ...state,
                deal_type: action.payload
            }
        case GET_OADEAL_LIST: 
            return state = {
                ...state,
                oadeal_list: action.payload
            }
        case GET_OADEAL: 
            return state = {
                ...state,
                oadeal: action.payload
            }
        case GET_CURRENCY: 
            return state = {
                ...state,
                oadeal_currency: action.payload
            }
        case CREATE_OA_DEAL: 
            return state = {
                ...state,
                create_oadeal: action.payload
            }
        case UPDATE_OA_DEAL: 
            return state = {
                ...state,
                update_oadeal: action.payload
            }
        case FAILED_CREATE_OA_DEAL: 
            return state = {
                ...state,
                failed_create_oadeal: action.payload
            }
        case GET_OA_DEAL_FILTERED_LIST: 
            return state = {
                ...state,
                oadeal_pending_list: action.payload
            }
        case GET_OA_DEAL_APPROVED_LIST: 
            return state = {
                ...state,
                oadeal_approved_list: action.payload
            }
        case GET_OA_DEAL_APPROVAL: 
            return state = {
                ...state,
                oadeal_approval_success: action.payload
            }
        case GET_OA_DEAL_REJECT: 
            return state = {
                ...state,
                oadeal_reject_success: action.payload
            }
        default:
            return state;
    }
}
export default OaDealsReducer;
