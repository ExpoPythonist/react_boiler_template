import { api } from '../../core/api'
import config, {
  OA_TOKEN_TRXN,
  DEPOSIT_FUND_TRXN,
  OFFSET_FUND_TRXN,
} from '../../config'

const OaToken = payload => ({
  type: OA_TOKEN_TRXN,
  payload,
})

const DepositFund = payload => ({
  type: DEPOSIT_FUND_TRXN,
  payload,
})

const OffsetFund = payload => ({
  type: OFFSET_FUND_TRXN,
  payload,
})

export const OaTokenTrxn = () => {
  return dispatch => {
    let url = config.endpoint.oa_token_trxn
    api.get(url).then(
      res => {
        dispatch(OaToken(res))
      },
      error => {
        if (error.code === 'ECONNABORTED') {
          dispatch(OaToken({ success: undefined })) // Timeout
        } else if (error.response) {
          dispatch(OaToken({ success: null })) // Unknown Error
        } else {
          dispatch(OaToken({ success: false })) // No Internet Connection
        }
      },
    )
  }
}
export const DepositFundTrxn = () => {
  return dispatch => {
    let url = config.endpoint.deposit_credit_trxn
    api.get(url).then(
      res => {
        dispatch(DepositFund(res))
      },
      error => {
        if (error.code === 'ECONNABORTED') {
          dispatch(DepositFund({ success: undefined })) // Timeout
        } else if (error.response) {
          dispatch(DepositFund({ success: null })) // Unknown Error
        } else {
          dispatch(DepositFund({ success: false })) // No Internet Connection
        }
      },
    )
  }
}
export const OffsetFundTrxn = () => {
  return dispatch => {
    let url = config.endpoint.offset_fund_trxn
    api.get(url).then(
      res => {
        dispatch(OffsetFund(res))
      },
      error => {
        if (error.code === 'ECONNABORTED') {
          dispatch(OffsetFund({ success: undefined })) // Timeout
        } else if (error.response) {
          dispatch(OffsetFund({ success: null })) // Unknown Error
        } else {
          dispatch(OffsetFund({ success: false })) // No Internet Connection
        }
      },
    )
  }
}
