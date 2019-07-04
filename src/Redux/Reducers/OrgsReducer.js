import { 
    REQUEST_CREATE_ORG, 
    GET_ORG_LIST, 
    FAILED_CREATE_ORG, 
    SINGLE_ORG_DATA, 
    DELETE_ORG_DATA, 
    GET_ORG_FINANCIAL_REPORT, 
    DELETE_OA_DEAL,GET_STATE_LIST, 
    ORG_LIST_COUNT, 
    GET_ORG_AUTO_APPROVAL_CONFIG,
    CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS,
    UPDATE_CHILD_ORGANISATION,
    GET_PUBLISHER ,
    ORGANISATION_FILE_UPLOAD,
    TRACK_ORGANISATION_FILE_UPLOAD_STATUS
} from "../../config";

const OrgsReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CREATE_ORG: 
            return state = {
                ...state,
                new_org: action.payload
            }
        case GET_ORG_LIST:
            return state = {
                ...state,
                org: action.payload
            }
        case FAILED_CREATE_ORG: 
            return state = {
                ...state,
                failed: action.payload
            }
        case SINGLE_ORG_DATA: 
            return state = {
                ...state,
                org_single: action.payload
            }
        case GET_ORG_FINANCIAL_REPORT: 
            return state = {
                ...state,
                org_financial_report: action.payload
            }
        case DELETE_OA_DEAL: 
            return state = {
                ...state,
                delete_oa_deal: action.payload
            }
        case GET_STATE_LIST: 
            return state = {
                ...state,
                state_list: action.payload.results
            }
        case DELETE_ORG_DATA: 
            const newState = state.org.filter((org) => {
                return org.id !== action.id
            })
            return state = {
                ...state,
                org: newState
            }
        case ORG_LIST_COUNT: 
            return state = {
                ...state,
                org_list_count: action.payload
            }
        case GET_ORG_AUTO_APPROVAL_CONFIG: 
            return state = {
                ...state,
                org_approval_config: action.payload
            }
        case CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS: 
            return state = {
                ...state,
                org_approval_status: action.payload
            }
        case UPDATE_CHILD_ORGANISATION: 
            return state = {
                ...state,
                child_organisation: action.payload
            }
        case GET_PUBLISHER: 
            return state = {
                ...state,
                publisher_list: action.payload
            }
        case ORGANISATION_FILE_UPLOAD:
            return state = {
                ...state,
                organisation_file_upload: action.payload,
            }
        case TRACK_ORGANISATION_FILE_UPLOAD_STATUS:
            return state = {
                ...state,
                track_upload_status: action.payload,
            }
        default:
            return state;
    }
}
export default OrgsReducer;
