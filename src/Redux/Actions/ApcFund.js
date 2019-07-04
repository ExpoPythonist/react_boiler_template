import config, { 
  ADD_UPDATE_APC_FUND,
  GET_APC_FUND_LIST, 
} from '../../config'
import { api } from '../../core/api';


export const getApcFundListReducer = (payload) => ({
  type: GET_APC_FUND_LIST,
  payload
})

export const addUpdateApcFundReducer = (payload) => ({
  type: ADD_UPDATE_APC_FUND,
  payload
})

// Get APC fund list
export const getApcFundList = (payload) => {
  let url = config.endpoint.apc_fund;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get(url).then((res) => {
        dispatch(getApcFundListReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        console.log("error: ", error);
        dispatch(getApcFundListReducer(error.response))
        resolve(Object.assign(error.response, { status: false }));
      })
    })
  }
}

// Add & update APC fund 
export const addApcFund = (payload) => {
  let url = config.endpoint.apc_fund;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        dispatch(addUpdateApcFundReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        reject(error.response);
      })
    })
  }
}
