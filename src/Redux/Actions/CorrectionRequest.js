import config, { ARTICLE_REQUIRED_FIELD,ARTICLE_APC_REQUEST_ORGANISATION } from '../../config'
import { api } from '../../core/api';


export const getRequiredFieldReducer = (payload) => ({
  type: ARTICLE_REQUIRED_FIELD,
  payload
})

export const getArticleApcRequestReducer = (payload) => ({
  type: ARTICLE_APC_REQUEST_ORGANISATION,
  payload
})


// Get required field 
export const getArticleRequiredField = (id) => {
  let url = config.endpoint.article_required_field+id
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get(url).then((res) => {
        dispatch(getRequiredFieldReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        dispatch(getRequiredFieldReducer(error.response.data))
        resolve(Object.assign(error, { status: false }));
      })
    })
  }
}

// Get required field 
export const getArticleApcRequestOrganisation = (id) => {
  let url = config.endpoint.article_apc_request_organisation+'?article_id='+id
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get(url).then((res) => {
        dispatch(getArticleApcRequestReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        dispatch(getArticleApcRequestReducer(error.response.data))
        resolve(Object.assign(error, { status: false }));
      })
    })
  }
}
