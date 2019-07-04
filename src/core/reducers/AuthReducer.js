import {
  RECIEVED_LOGIN_DATA,
  FAILED_LOGIN_DATA,
  SET_USER_DATA,
  LOGOUT_USER,
  CLEAR_FAILED_STATUS
} from "../../config";

// import {APP_LOADED, APP_UNLOADED, QITEM_CLICKED} from "../actions/ActionTypes"


const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case FAILED_LOGIN_DATA:
      return action.payload;
    case RECIEVED_LOGIN_DATA:
      return action.payload
    case SET_USER_DATA:
      return action.payload
    case LOGOUT_USER:
      return state = {}
    case CLEAR_FAILED_STATUS:
      if (!state.token) {
        return state = {}
      } else {
        return state;
      }
      default:
        return state;
  }
}
export default AuthReducer;