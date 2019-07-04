import config, { ADD_UPDATE_ARTICLE, ARTICLE_DOWNLOAD, ARTICLE_FILE_UPLOAD, TRACK_ARTICLE_FILE_UPLOAD_STATUS, ALL_ARTICLES, GET_ARTICLE_MANUAL, GET_ARTICLE_FULL, GET_SINGLE_ARTICLE, GET_LICENCE_LIST, CREATE_AUTHOR_APC_FUND, FAILED_AUTHOR_APC_FUND, CORRECTION_REQUEST, CORRECTION_REQUEST_SINGLE,BOOK_FILE_UPLOAD,ALL_BOOKS } from '../../config'
import { api } from '../../core/api';


export const CreateNewArticle = (payload) => ({
  type: ADD_UPDATE_ARTICLE,
  payload
})

export const GetArticles = (payload) => ({
  type: ALL_ARTICLES,
  payload
})

export const articleDownloadAction = (payload) => ({
  type: ARTICLE_DOWNLOAD,
  payload
})

export const GetBooks = (payload) => ({
  type: ALL_BOOKS,
  payload
})

export const ArticleManual = (payload) => ({
  type: GET_ARTICLE_MANUAL,
  payload
})

export const ArticleFull = (payload) => ({
  type: GET_ARTICLE_FULL,
  payload
})

export const getLicenseReducer = (payload) => ({
  type: GET_LICENCE_LIST,
  payload
})

export const createAuthorApcFundReducer = (payload) => ({
  type: CREATE_AUTHOR_APC_FUND,
  payload
})

export const failedAuthorApcFundReducer = (payload) => ({
  type: FAILED_AUTHOR_APC_FUND,
  payload
})

export const CorrectionRequest = (payload) => ({
  type: CORRECTION_REQUEST,
  payload
})

export const CorrectionRequestSingle = (payload) => ({
  type: CORRECTION_REQUEST_SINGLE,
  payload
})

export const articleFileUploadReducer = (payload) => ({
  type: ARTICLE_FILE_UPLOAD,
  payload
})

export const bookFileUploadReducer = (payload) => ({
  type: BOOK_FILE_UPLOAD,
  payload
})

export const trackArticleFileUploadStatusAction = (payload) => ({
  type: TRACK_ARTICLE_FILE_UPLOAD_STATUS,
  payload
})

export const trackBookFileUploadStatusReducer = (payload) => ({
  type: TRACK_ARTICLE_FILE_UPLOAD_STATUS,
  payload
})
// Article file upload reducer
export const articleFileUpload = (payload) => {
  let url = config.endpoint.article_basic_upload;
  return (dispatch, getState) => {
    const token = getState().auth.token;

    return new Promise((resolve, reject) => {
      let filename = payload.get('filename');
      let headers = {
        'Content-Disposition': `attachment; filename="${filename}"`,
      };

      payload.delete('filename');

      api.post(url, payload, token, headers).then((res) => {
        dispatch(articleFileUploadReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        console.log("error: ", error);
        
        dispatch(articleFileUploadReducer(error.response))
        resolve(Object.assign(error.response, { status: false }));
      })
    })
  }
}


// Books upload reducer
export const bookFileUpload = (payload) => {
  let url = config.endpoint.book_upload;
  return (dispatch, getState) => {
    const token = getState().auth.token;

    return new Promise((resolve, reject) => {
      let filename = payload.get('filename');
      let headers = {
        'Content-Disposition': `attachment; filename="${filename}"`,
      };

      payload.delete('filename');

      api.post(url, payload, token, headers).then((res) => {
        dispatch(bookFileUploadReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        console.log("error: ", error);
        dispatch(bookFileUploadReducer(error.response))
        resolve(Object.assign(error.response, { status: false }));
      })
    })
  }
}

// Track file upload status
export const trackArticleFileUploadStatus = (payload) => {
  let url = payload.upload_status;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.get(url).then((res) => {
        dispatch(trackArticleFileUploadStatusAction(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        console.log("error: ", error);
        dispatch(trackArticleFileUploadStatusAction(error.response))
        resolve(Object.assign(error.response, { status: false }));
      })
    })
  }
}

// Download articles
export const articleDownload = (payload) => {
  const params = payload ? (payload.params || '') : '';
  const filter = payload ? (payload.filter || '') : '';
  const url = config.endpoint.article_download + `?fields=title,corresponding_author,author_email,author_department,author_affiliation,net_apc_usd,net_apc_eur,net_apc_gbp,publication_type,content_type_name,article_id,journal_name,publisher_name,submission_date,acceptance_date,approved_date,doi,licence_name,funder_name,grant_number,co_author,co_author_email,co_author_department,co_author_affiliation&${params && params + '&'}${filter}`;
  
  return (dispatch, getState) => { 
    const token = getState().auth.token;
    let options = {
      responseType: 'blob',
    };

    return new Promise((resolve, reject) => { 
      api.get(url, token, options).then((res) => { 
        dispatch(articleDownloadAction(res));
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        console.log("error: ", error);
        reject(Object.assign(error.response, { status: false }));
      })
    })
  }
}

// Create Author Apc Fund Request
export const createAuthorApcFund = (payload) => {
  let url = config.endpoint.author_apc_fund_request;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        dispatch(createAuthorApcFundReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(function (error) {
        dispatch(createAuthorApcFundReducer(error.response.data))
        resolve(Object.assign(error, { status: false }));
      })
    })
  }
}

// Request from hub
export const CreateArticle = (payload) => {
  let url = config.endpoint.article_basic;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        delete res.config;
        delete res.headers;
        delete res.request;
        dispatch(CreateNewArticle(res))
        resolve(res);
      }, error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          dispatch(CreateNewArticle(error.response))
          reject(error);
        } else {
          dispatch(CreateNewArticle({
            status: 500
          }))
        }
      })
    })
  }
}


// Request from hub
export const CreateBook = (payload) => {
  let url = config.endpoint.book;
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        delete res.config;
        delete res.headers;
        delete res.request;
        dispatch(CreateNewArticle(res))
        resolve(res);
      }, error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          dispatch(CreateNewArticle(error.response))
          reject(error);
        } else {
          dispatch(CreateNewArticle({
            status: 500
          }))
        }
      })
    })
  }
}

// Request from hub
export const EditArticle = (payload) => {
  let url = config.endpoint.article_manual + payload.id + "/";
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api.put(url, payload).then((res) => {
        console.log(res)
        delete res.config;
        delete res.headers;
        delete res.request;
        dispatch(CreateNewArticle(res))
        resolve(res);
      }, error => {
        console.log(error, 'Error')
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          dispatch(CreateNewArticle(error.response))
          reject(error);
        } else {
          dispatch(CreateNewArticle({
            status: 500
          }))
        }
      })
    })
  }
}

export const SingleArticle = (payload) => ({
  type: GET_SINGLE_ARTICLE,
  payload
})

export const getSingleArticle = (id) => {
  let url = config.endpoint.article_manual + id + "/";
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.get(url).then(res => {
        dispatch(SingleArticle(res))
        resolve(res)
      }, error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          dispatch(SingleArticle(error.response))
        } else {
          dispatch(SingleArticle({ status: 500 }))
        }
      })
    })
  }
}

export const UpdateArticleRequired = (id, payload) => {
  let url = config.endpoint.article_required_field + id + "/";
  return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
          return api.put(url, payload).then((res) => {
              console.log(res, 'update status');
              dispatch(SingleArticle(
                  Object.assign(res.data, { status: res.status })
              ))
              resolve(res.data)
          }, error => {
              console.log(error.response,'fsafdsdaf');
              dispatch(SingleArticle(
                  error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
              ))
              resolve(error.response)
          }).catch(error => {
              dispatch(SingleArticle(
                  Object.assign({ status: 500 })
              ))
              reject(error)
              console.log('Something error')
          })
      })
  }
}

export const getArticleRequired = (id) => {
  let url = config.endpoint.article_required_field + id + "/";
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.get(url).then(res => {
        dispatch(SingleArticle(res))
        resolve(res)
      }, error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          dispatch(SingleArticle(error.response))
        } else {
          dispatch(SingleArticle({ status: 500 }))
        }
      })
    })
  }
}


export const GetAllArticles = () => {
  let url = config.endpoint.article_basic;
  return dispatch => {
    api.get(url).then(res => {
      // console.log(res)
      dispatch(GetArticles(res.results))
    }, error => {
      if (error.response) {
        delete error.config;
        delete error.headers;
        delete error.request;
        delete error.response.request;
        delete error.response.headers;
        delete error.response.config;
        dispatch(GetArticles(error.response))
      } else {
        dispatch(GetArticles({
          status: 500
        }))
      }
    })
  }
}

// Get Journalanization List
export const GetAllBooks = (payload) => {
  return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
          let url = config.endpoint.book+'?page='+payload.pageNum;
          api.get(url).then((res) => {
              dispatch(GetBooks(res))
              resolve(Object.assign(res, { status: true }));
          }).catch(e => {
              dispatch(GetBooks(e.response))
          })
      })
  }
}

export const GetArticleManual = (payload) => {
  const params = payload ? (payload.params || '') : '';
  const filter = payload ? (payload.filter || '') : '';
  const url = config.endpoint.article_manual + `?${params && params + '&'}${filter}`;

  return dispatch => {
    api.get(url).then(res => {
      dispatch(ArticleManual(res))
    }, error => {
      if (error.response) {
        delete error.config;
        delete error.headers;
        delete error.request;
        delete error.response.request;
        delete error.response.headers;
        delete error.response.config;
        dispatch(ArticleManual(error.response))
      } else {
        dispatch(ArticleManual({
          status: 500
        }))
      }
    })
  }
}

export const GetArticleFull = (payload) => {
  const params = payload ? (payload.params || '') : '';
  const filter = payload ? (payload.filter || '') : '';
  const url = config.endpoint.article_full + `?${params && params + '&'}${filter}`;
  return dispatch => {
    api.get(url).then(res => {
      dispatch(ArticleFull(res))
    }, error => {
      if (error.response) {
        delete error.config;
        delete error.headers;
        delete error.request;
        delete error.response.request;
        delete error.response.headers;
        delete error.response.config;
        dispatch(ArticleFull(error.response))
      } else {
        dispatch(ArticleFull({
          status: 500
        }))
      }
    })
  }
}

export const getFunders = () => {
  let url = config.endpoint.apc_funder;
  return () => {
    return new Promise((resolve, reject) => {
      api.get(url).then(res => {
        resolve(res.results)
      }, error => {
        reject(error);
      })
    })
  }
}


export const ReviewArticle = () => {
  return () => {
    let url = config.endpoint.article_reviewer;
    api.get(url).then((res) => {
      console.log(res)
    }, error => {
      console.log(error)
    })
  }
}

export const CorrectionRequestAction = (payload) => {
  return () => {
    let url = config.endpoint.correction_request;
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
}

export const getCorrectionRequested = (payload) => {
  let url = config.endpoint.correction_request;
  return dispatch => {
    api.get(url).then(res => {
      dispatch(CorrectionRequest(res.results))
    }, error => {
      if (error.response) {
        delete error.config;
        delete error.headers;
        delete error.request;
        delete error.response.request;
        delete error.response.headers;
        delete error.response.config;
        dispatch(CorrectionRequest(error.response))
      } else {
        dispatch(CorrectionRequest({
          status: 500
        }))
      }
    })
  }
}


export const getSingleCorrectionRequested = (id) => {
  let url = config.endpoint.correction_request + id;
  return dispatch => {
    api.get(url).then(res => {
      dispatch(CorrectionRequestSingle(res))
    }, error => {
      if (error.response) {
        delete error.config;
        delete error.headers;
        delete error.request;
        delete error.response.request;
        delete error.response.headers;
        delete error.response.config;
        dispatch(CorrectionRequestSingle(error.response))
      } else {
        dispatch(CorrectionRequestSingle({
          status: 500
        }))
      }
    })
  }
}

export const getLicense = () => {
  return dispatch => {
    let url = config.endpoint.license;
    return new Promise((resolve, reject) => {
      api.get(url).then(res => resolve(res.results), error => reject(error))
    })
  }
}

// Get Journalanization List
export const getLicenseList = (payload) => {
  return (dispatch, getState) => {
    let url = config.endpoint.license;
    return new Promise((resolve, reject) => {
      api.get(url + '?&page_size=99999').then((res) => {
        dispatch(getLicenseReducer(res))
        resolve(Object.assign(res, { status: true }));
      }).catch(e => {
        reject(e)
      })
    })
  }
}

export const getApcOption = () => {
  return dispatch => {
    let url = config.endpoint.apc_option;
    return new Promise((resolve, reject) => {
      api.get(url).then(res => resolve(res.results), error => reject(error))
    })
  }
}

export const getApcFundSrc = () => {
  return dispatch => {
    let url = config.endpoint.apc_fund_source;
    return new Promise((resolve, reject) => {
      api.get(url).then(res => resolve(res.results), error => reject(error))
    })
  }
}


export const ArticleApprove = (payload) => {
  return () => {
    let url = config.endpoint.article_approve;
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => resolve({ status: res.status }), error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          reject(error.response);
        } else {
          reject({ status: 500 });
        }
      })
    })
  }
}



export const ArticleReject = (payload) => {
  return () => {
    let url = config.endpoint.article_reject;
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => resolve({ status: res.status }), error => {
        if (error.response) {
          delete error.config;
          delete error.headers;
          delete error.request;
          delete error.response.request;
          delete error.response.headers;
          delete error.response.config;
          reject(error.response);
        } else {
          reject({ status: 500 });
        }
      })
    })
  }
}
