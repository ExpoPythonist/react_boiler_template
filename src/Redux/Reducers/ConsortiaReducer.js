import { 
  CONSORTIA_ADD_MEMBER, 
  CONSORTIA_MEMBER_LIST, 
} from "../../config";

const ConsortiaReducer = (state = {}, action) => {
  switch (action.type) {
      case CONSORTIA_ADD_MEMBER: 
        return state = {
            ...state,
            consortia_add_member: action.payload
        }
      case CONSORTIA_MEMBER_LIST:
        return state = {
            ...state,
            consortia_list: action.payload
        }
      default:
        return state;
  }
}
export default ConsortiaReducer;
