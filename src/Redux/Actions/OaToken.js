import { CREATE_OA_TOKEN,CREATE_ORGANISATION_TOKEN,ORGANISATION_OFFSET_FUND,GET_OFFSET_FUND,GET_ORGANISATION_TOKEN,GET_OA_TOKEN,DELETE_OA_TOKEN,FAILED_DELETE_OA_TOKEN,ERROR_MESSAGE } from "../../config";
import { api } from "../../core/api";

// Loaded into App Reducers
export const createOaToken = (payload) => ({
    type: CREATE_OA_TOKEN,
    payload
})

export const createOrganisationToken = (payload) => ({
    type: CREATE_ORGANISATION_TOKEN,
    payload
})

export const createOffsetFund = (payload) => ({
    type: ORGANISATION_OFFSET_FUND,
    payload
})

export const getOffsetFund = (payload) => ({
    type: GET_OFFSET_FUND,
    payload
})

export const getOrgToken = (payload) => ({
    type: GET_ORGANISATION_TOKEN,
    payload
})

export const getOaTokenReducer = (payload) => ({
    type: GET_OA_TOKEN,
    payload
})

export const deleteOaTokenReducer = (payload) => ({
    type: DELETE_OA_TOKEN,
    payload
})

export const failedDeleteOaTokenReducer = (payload) => ({
    type: FAILED_DELETE_OA_TOKEN,
    payload
})

export const failedResponse = (payload) => ({
    type: ERROR_MESSAGE,
    payload
})


// Create OA Token
export const generateOaToken = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.post('oa-token/',payload).then((res) => {
                dispatch(createOaToken(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Create Organisation Token
export const generateOrganisationToken = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.post('organisation-token/',payload).then((res) => {
                dispatch(createOrganisationToken(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}
// Allocate Offset Fund
export const allocatOrganisationOffsetFund = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.post('organisation-offset-fund/',payload).then((res) => {
                dispatch(createOffsetFund(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                console.log(e.response.data,'hello');
                dispatch(failedResponse(e.response.data))
                reject(e)
            })
        })
    }
}

// Get Offset Fund
export const getOrganisationOffsetFund = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('organisation-offset-fund?page='+payload.pageNum+'&page_size='+payload.pageSize).then((res) => {
                dispatch(getOffsetFund(res))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                console.log(error)
                reject(Object.assign(error, { status: false }));
            })
        })
    }
}

// Get Organisation Token List
export const getOrganisationToken = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('organisation-token?page='+payload.pageNum+'&page_size='+payload.pageSize).then((res) => {
                dispatch(getOrgToken(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get OA Token List
export const getOaToken = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('oa-token?page='+payload.pageNum).then((res) => {
                dispatch(getOaTokenReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Organisation Token List
export const getOaTokenisActive = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('oa-token/?is_assigned=0').then((res) => {
                dispatch(getOaTokenReducer(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

export const deleteOaToken = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.delete('oa-token/' + id + '/').then((res) => {
                dispatch(deleteOaTokenReducer(id))
                resolve({ status: true })
            }, error => {
                console.log(error)
                dispatch(failedDeleteOaTokenReducer(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

