import { OA_TOKEN_TRXN, OFFSET_FUND_TRXN, DEPOSIT_FUND_TRXN } from "../../config";

export default (state = {
  token_trxn: {},
  offset_trxn: {},
  deposit_trxn: {}
}, action) => {
  switch (action.type) {
    case OA_TOKEN_TRXN:
      return (state = {
        ...state,
        token_trxn: action.payload,
      })
    case OFFSET_FUND_TRXN:
      return (state = {
        ...state,
        offset_trxn: action.payload,
      })
    case DEPOSIT_FUND_TRXN:
      return (state = {
        ...state,
        deposit_trxn: action.payload,
      })
    default:
      return state
  }
}