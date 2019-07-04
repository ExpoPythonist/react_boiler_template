import { DASHBOARD_DATA } from "../../config";

const OaDealsReducer = (state = {}, action) => {
    switch (action.type) {
        case DASHBOARD_DATA: 
            return state = {
                ...state,
                dashboard_data: action.payload
            }
        default:
            return state;
    }
}
export default OaDealsReducer;