import { GET_DASHBOARD_DATA } from "../../config";

const DashReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA:
      return state = {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
export default DashReducer 