import { 
    GET_APC_FUND_LIST, 
    ADD_UPDATE_APC_FUND, 
} from "../../config";

const ApcFundReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_APC_FUND_LIST: 
            return state = {
                ...state,
                apc_fund_list: action.payload
            }
        case ADD_UPDATE_APC_FUND: 
            return state = {
                ...state,
                apc_fund: action.payload
            }
        default:
            return state;
    }
}
export default ApcFundReducer;