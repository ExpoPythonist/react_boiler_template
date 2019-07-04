import { GET_INSTITUTION_LIST,GET_ORG_FINANCIAL_REPORT, GET_PUBLICATION_LIST,GET_DEPARTMENT_LIST} from "../../config";

const InstitutionReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_INSTITUTION_LIST: 
            return state = {
                ...state,
                institution_list: action.payload
            }
        case GET_ORG_FINANCIAL_REPORT: 
            return state = {
                ...state,
                org_financial_report: action.payload
            }
        case GET_PUBLICATION_LIST: 
            return state = {
                ...state,
                publication_types: action.payload
            }
          case GET_DEPARTMENT_LIST: 
            return state = {
                ...state,
                department_types: action.payload
            }
        default:
            return state;
    }
}
export default InstitutionReducer;
