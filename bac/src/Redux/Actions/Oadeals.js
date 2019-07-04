import config, { 
    GET_COUNTER_ORG_LIST, 
    GET_OADEAL_LIST, 
    GET_OADEAL, 
    GET_DEAL_TYPE, 
    GET_CURRENCY, 
    CREATE_OA_DEAL, 
    UPDATE_OA_DEAL, 
    DELETE_OA_DEAL, 
    GET_OA_DEAL_FILTERED_LIST, 
    GET_OA_DEAL_APPROVED_LIST, 
    GET_OA_DEAL_APPROVAL, 
    GET_OA_DEAL_REJECT, 
    FAILED_CREATE_OA_DEAL 
} from "../../config";
import { api } from "../../core/api";

// Loaded into App Reducers
export const getAllCounterOrg = (payload) => ({
    type: GET_COUNTER_ORG_LIST,
    payload
})

export const getDealType = (payload) => ({
    type: GET_DEAL_TYPE,
    payload
})

export const getOaDealList = (payload) => ({
    type: GET_OADEAL_LIST,
    payload
})

export const getOaDeal = (payload) => ({
    type: GET_OADEAL,
    payload
})

export const getCurrencyList = (payload) => ({
    type: GET_CURRENCY,
    payload
})

export const createOaDealReducer = (payload) => ({
    type: CREATE_OA_DEAL,
    payload
})

export const updateOaDealReducer = (payload) => ({
    type: UPDATE_OA_DEAL,
    payload
})

export const failedCreateOaDealReducer = (payload) => ({
    type: FAILED_CREATE_OA_DEAL,
    payload
})



export const deleteOaDealReducer = (payload) => ({
    type: DELETE_OA_DEAL,
    payload
})

export const getOaDealFilterListReducer = (payload) => ({
    type: GET_OA_DEAL_FILTERED_LIST,
    payload
})

export const getOaDealApprovedListReducer = (payload) => ({
    type: GET_OA_DEAL_APPROVED_LIST,
    payload
})

export const getOaDealApprovalReducer = (payload) => ({
    type: GET_OA_DEAL_APPROVAL,
    payload
})

export const getOaDealRejectReducer = (payload) => ({
    type: GET_OA_DEAL_REJECT,
    payload
})




// Create OA Deal 
export const createOaDeal = (payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.post('oa-deal/',payload).then((res) => {
                dispatch(createOaDealReducer(res.results))
                dispatch(failedCreateOaDealReducer({success:true}))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                dispatch(failedCreateOaDealReducer(error.response.data))
                resolve(Object.assign(error, { status: false }));
            })
        })
    }
}
// Update OA Deal 
export const updateOaDeal = (id, payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.put(config.endpoint.oa_deal + id + '/', payload).then((res) => {
                dispatch(updateOaDealReducer(res.results))
                dispatch(failedCreateOaDealReducer({success:true}))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                dispatch(failedCreateOaDealReducer(error.response.data))
                resolve(Object.assign(error, { status: false }));
            })
        })
    }
}

// Get Counter Organisation List 
export const getAllCounterOrgList = (id) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get('institution').then((res) => {
                dispatch(getAllCounterOrg(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Deal Type List 
export const getAllDealType = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('deal-type').then((res) => {
                dispatch(getDealType(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

//  .get(
//      'oa-deal?page=' +
//      payload && (payload.pageNum && payload.pageNum) +
//      '&page_size=' +
//      payload && (payload.pageSize && payload.pageSize),
//  )

// Get OA Deal  List 
export const getAllOaDealList = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api
              .get('oa-deal?page=1&page_size=9999999',)
              .then(res => {
                dispatch(getOaDealList(res))
                resolve(Object.assign(res, { status: true }))
              })
              .catch(e => {
                reject(e)
              })
        })
    }
}

// Get OA Deal  
export const getSingleOaDeal = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api
                .get(config.endpoint.oa_deal + id +'/')
                .then(res => {
                    dispatch(getOaDeal(res))
                    resolve(Object.assign(res, { status: true }))
                })
                .catch(e => {
                    reject(e)
                })
        })
    }
}

// Get Currency  List 
export const getAllCurrencyList = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('currency/?page_size=9999').then((res) => {
                dispatch(getCurrencyList(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}
// Delete OA DEAL
export const deleteOaDeal = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.delete('oa-deal/'+id).then((res) => {
                dispatch(deleteOaDealReducer(res))
                resolve({status: true})
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Get Filterd OA DEAL
export const oADealListPending = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.get('oa-deal/?approval_status=pending').then((res) => {
                dispatch(getOaDealFilterListReducer(res.results))
                resolve({status: true})
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Get Filterd OA DEAL
export const oADealListApproved = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.get('oa-deal/?approval_status=approved').then((res) => {
                dispatch(getOaDealApprovedListReducer(res.results))
                resolve({status: true})
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Approved OaDeal List
export const oADealListApproval = (ids) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.put('oa-deal/'+ids+'/approve/').then((res) => {
                dispatch(getOaDealApprovalReducer(res.results))
                resolve({status: true})
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Reject OaDeal List
export const oADealListReject = (ids) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.put('oa-deal/'+ids+'/reject/').then((res) => {
                dispatch(getOaDealRejectReducer(res.results))
                resolve({status: true})
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}
