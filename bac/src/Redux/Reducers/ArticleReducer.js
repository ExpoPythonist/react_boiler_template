import { ADD_UPDATE_ARTICLE, ARTICLE_DOWNLOAD, ARTICLE_FILE_UPLOAD, TRACK_ARTICLE_FILE_UPLOAD_STATUS, CLEAR_FAILED_STATUS, ALL_ARTICLES, GET_ARTICLE_MANUAL, GET_ARTICLE_FULL, GET_SINGLE_ARTICLE, GET_LICENCE_LIST, CREATE_AUTHOR_APC_FUND, FAILED_AUTHOR_APC_FUND, CORRECTION_REQUEST, CORRECTION_REQUEST_SINGLE,BOOK_FILE_UPLOAD,TRACK_BOOK_FILE_UPLOAD_STATUS,ALL_BOOKS } from "../../config";

const ArticleReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_UPDATE_ARTICLE:
            return state = {
                ...state,
                article_status: action.payload
            }
        case ALL_ARTICLES:
            return state = {
                ...state,
                article_list: action.payload
            }
        case ALL_BOOKS:
            return state = {
                ...state,
                book_list: action.payload
            }
        case ARTICLE_FILE_UPLOAD:
            return state = {
                ...state,
                article_file_upload: action.payload,
            }
        case BOOK_FILE_UPLOAD:
            return state = {
                ...state,
                article_file_upload: action.payload,
            }
        case TRACK_ARTICLE_FILE_UPLOAD_STATUS:
            return state = {
                ...state,
                track_upload_status: action.payload,
            }
        case TRACK_BOOK_FILE_UPLOAD_STATUS:
            return state = {
                ...state,
                track_upload_status: action.payload,
            }
        case GET_ARTICLE_MANUAL:
            return state = {
                ...state,
                article_manual: action.payload.results,
                count: action.payload.count,
            }
        case GET_ARTICLE_FULL:
            return state = {
                ...state,
                article_full: action.payload.results,
                count: action.payload.count,
            }
        case GET_SINGLE_ARTICLE:
            return state = {
                ...state,
                article_single: action.payload
            }
        case GET_LICENCE_LIST:
            return state = {
                ...state,
                licence_list: action.payload
            }
        case CREATE_AUTHOR_APC_FUND:
            return state = {
                ...state,
                author_apc_fund_success: action.payload
            }
        case FAILED_AUTHOR_APC_FUND:
            return state = {
                ...state,
                author_apc_fund_failed: action.payload
            }
        case CORRECTION_REQUEST:
            return state = {
                ...state,
                correction_list: action.payload
            }
        case CORRECTION_REQUEST_SINGLE:
            return state = {
                ...state,
                correction_single: action.payload
            }
        case ARTICLE_DOWNLOAD:
            return state = {
                ...state,
                download_data: action.payload
            }
        case CLEAR_FAILED_STATUS:
            return state = { article_status: null }

        default:
            return state;
    }
}
export default ArticleReducer;