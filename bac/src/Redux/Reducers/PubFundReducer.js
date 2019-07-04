import { DEPOSIT_FUND_LIST, DEPOSIT_FUND, CLEAR_FAILED_STATUS } from "../../config";

const PubFundReducer = (state = {}, action) => {
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
        case CLEAR_FAILED_STATUS: {
            return state = {}
        }
        default:
            return state;
    }
}
export default PubFundReducer;
