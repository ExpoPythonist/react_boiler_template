import { REQUEST_CREATE_ORG } from "../../config";

const VatReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_CREATE_ORG: 
            return state = {
                ...state,
                new_org: action.payload
            }
        default:
            return state;
    }
}
export default VatReducer;