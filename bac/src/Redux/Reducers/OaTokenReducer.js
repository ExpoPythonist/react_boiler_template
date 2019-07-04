import { CREATE_OA_TOKEN,CREATE_ORGANISATION_TOKEN,ORGANISATION_OFFSET_FUND,GET_OFFSET_FUND,GET_ORGANISATION_TOKEN,GET_OA_TOKEN,DELETE_OA_TOKEN,FAILED_DELETE_OA_TOKEN} from "../../config";

const OaTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_OA_TOKEN: 
            return state = {
                ...state,
                create_oa_token: action.payload
            }
        case CREATE_ORGANISATION_TOKEN: 
            return state = {
                ...state,
                create_organisation_token: action.payload
            }
        case ORGANISATION_OFFSET_FUND: 
            return state = {
                ...state,
                organisation_offset_fund: action.payload
            }
        case GET_OFFSET_FUND: 
            return state = {
                ...state,
                offset_fund_list: action.payload
            }
        case GET_ORGANISATION_TOKEN: 
            return state = {
                ...state,
                organisation_token_list: action.payload
            }
        case GET_OA_TOKEN: 
            return state = {
                ...state,
                oa_token_list: action.payload
            }
        case DELETE_OA_TOKEN: 
            return state = {
                ...state,
                delete_oa_token_success: action.payload
            }
        case FAILED_DELETE_OA_TOKEN: 
            return state = {
                ...state,
                delete_oa_token_failed: action.payload
            }
        default:
            return state;
    }
}
export default OaTokenReducer;
