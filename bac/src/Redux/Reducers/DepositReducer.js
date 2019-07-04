import { DEPOSIT_FUND_LIST, DEPOSIT_FUND, CLEAR_FAILED_STATUS, APPROVED_DEPOSIT_LIST, PENDING_DEPOSIT_LIST } from "../../config";

export default (state = {}, action) => {
    switch (action.type) {
        case DEPOSIT_FUND_LIST: {
            return state = {
                ...state,
                deposit_list: action.payload
            }
        }
        case DEPOSIT_FUND: {
            return state = {
                ...state,
                deposit_request: action.payload
            }
        }
        case APPROVED_DEPOSIT_LIST: {
            return state = {
                ...state,
                approved: action.payload
            }
        }
        case PENDING_DEPOSIT_LIST: {
            return state = {
                ...state,
                pending: action.payload
            }
        }
        case CLEAR_FAILED_STATUS: {
            return state = {}
        }
        default:
            return state;
    }
}
