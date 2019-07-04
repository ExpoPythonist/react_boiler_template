import config, { 
  GET_AUTHOR_APC_REQUEST,
} from '../../config'
import { api } from '../../core/api';


export const getApcRequestsReducer = (payload) => ({
  type: GET_AUTHOR_APC_REQUEST,
  payload
})


// Get Author Apc Fund Request
export const getAllApcRequests = (payload) => {
  let url = config.endpoint.author_apc_fund_request;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get(url).then((res) => {
        dispatch(getApcRequestsReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        dispatch(getApcRequestsReducer(error.response.data))
        resolve(Object.assign(error, { status: false }));
      })
    })
  }
}
