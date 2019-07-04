import config, { GET_INSTITUTION_LIST,GET_PUBLICATION_LIST ,GET_DEPARTMENT_LIST} from "../../config";
import { api } from "../../core/api";



// Loaded into App Reducers
export const getInstitutions = (payload) => ({
    type: GET_INSTITUTION_LIST,
    payload
})

export const getpublications = (payload) => ({
    type: GET_PUBLICATION_LIST,
    payload
})
export const getdepartments = (payload) => ({
    type: GET_DEPARTMENT_LIST,
    payload
})




// Get Journalanization List
export const getInstitutionsList = (payload) => {
    let url = config.endpoint.institutions;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getInstitutions(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    }
}

// Get Institution List
export const getInstitutionsLists = (payload) => {
    let url = config.endpoint.institution;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getInstitutions(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    }
}

export const getPubsByFiltering = payload => {
    const filter = payload ? (payload.filter || '') : '';
    const url = config.endpoint.pubdb + `?${filter}`;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getInstitutions(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    }
}

export const getUnivByFiltering = payload => {
    const filter = payload ? (payload.filter || '') : '';
    const url = config.endpoint.unidb + `?${filter}`;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getInstitutions(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    } 
}
export const getPublicationFiltering = payload => {
    const filter = payload ? (payload.filter || '') : '';
    const url = config.endpoint.publication_type + `?${filter}`;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getpublications(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    } 
}
export const getDepartByFiltering = payload => {
    const filter = payload ? (payload.filter || '') : '';
    const url = config.endpoint.department + `?${filter}`;
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getdepartments(res.results))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                reject(error)
            })
        })
    } 
}