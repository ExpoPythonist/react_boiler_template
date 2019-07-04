import { GET_PUBLICATION_TYPE, JOURNAL_FILE_UPLOAD, TRACK_JOURNAL_FILE_UPLOAD_STATUS, GET_JOURNAL_TYPE, GET_CONTENT_TYPE, REQUEST_CREATE_PUBLICATION, GET_JOURNAL_LIST, SINGLE_JOURNAL_DATA,COUNT_JOURNAL_LIST } from "../../config";

const OrgsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PUBLICATION_TYPE: 
            return state = {
                ...state,
                publication_type: action.payload
            }
        case GET_JOURNAL_TYPE: 
            return state = {
                ...state,
                journal_type: action.payload
            }
        case GET_CONTENT_TYPE: 
            return state = {
                ...state,
                content_type: action.payload
            }
        case REQUEST_CREATE_PUBLICATION: 
            return state = {
                ...state,
                publication_created: action.payload
            }
        case GET_JOURNAL_LIST: 
            return state = {
                ...state,
                journal_list: action.payload
            }
        case SINGLE_JOURNAL_DATA: 
            return state = {
                ...state,
                single_journal: action.payload
            }
        case COUNT_JOURNAL_LIST: 
            return state = {
                ...state,
                count_journal_list: action.payload
            }
        case JOURNAL_FILE_UPLOAD:
            return state = {
                ...state,
                journal_file_upload: action.payload,
            }
        case TRACK_JOURNAL_FILE_UPLOAD_STATUS:
            return state = {
                ...state,
                track_upload_status: action.payload,
            }
        default:
            return state;
    }
}
export default OrgsReducer;
