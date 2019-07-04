import config, {
    GET_ORG_LIST, 
    UPDATE_CHILD_ORGANISATION,
    GET_ORG_AUTO_APPROVAL_CONFIG,
    TRIGGER_ORG_AUTO_APPROVAL_CONFIG,
    CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS, 
    REQUEST_CREATE_ORG, 
    FAILED_CREATE_ORG, 
    GET_ORG_LIST_ALL, 
    REQUEST_UPDATE_ORG, 
    DELETE_ORG_DATA, 
    REQUEST_FAILED_DELETE_USER, 
    SINGLE_ORG_DATA, 
    FAILED_SINGLE_ORG_DATA, 
    GET_ORG_FINANCIAL_REPORT, 
    ORG_LIST_COUNT,
    GET_PUBLISHER,
    ORGANISATION_FILE_UPLOAD,
    TRACK_ORGANISATION_FILE_UPLOAD_STATUS
} from "../../config";
import { api } from "../../core/api";



// Loaded into App Reducers
export const getOrgs = (payload) => ({
    type: GET_ORG_LIST,
    payload
})

// Loaded into App Reducers
export const getAllOrgs = (payload) => ({
    type: GET_ORG_LIST_ALL,
    payload
})

// Sign Up Action Creator
export const recievedOrgData = (payload) => ({
    type: REQUEST_CREATE_ORG,
    payload
})

// Failed Response
export const failedCreatingOrg = (payload) => ({
    type: FAILED_CREATE_ORG,
    payload
})

export const failedUpdateOrg = (payload) => ({
    type: REQUEST_UPDATE_ORG,
    payload
})


export const updateOrgData = (payload) => ({
    type: REQUEST_UPDATE_ORG,
    payload
})

export const updateChildOrg = (payload) => ({
    type: UPDATE_CHILD_ORGANISATION,
    payload
})
export const failedDeleteUser = (payload) => ({
    type: REQUEST_FAILED_DELETE_USER,
    payload
})

// Clearing failer status
export const deleteOrgData = (id) => ({
    type: DELETE_ORG_DATA,
    id
})

export const singleOrgData = (payload) => ({
    type: SINGLE_ORG_DATA,
    payload
})

export const failedSingleOrgData = (payload) => ({
    type: FAILED_SINGLE_ORG_DATA,
    payload
})

export const orgFinancialReport = (payload) => ({
    type: GET_ORG_FINANCIAL_REPORT,
    payload
})

export const orgListCount = (payload) => ({
    type: ORG_LIST_COUNT,
    payload
})

// Get organisation approval config
export const getOrgAutoApprovalConfig = (payload) => ({
    type: GET_ORG_AUTO_APPROVAL_CONFIG,
    payload
})

// Create & Update organisation approval status
export const createUpdateOrgAutoApprovalStatus = (payload) => ({
    type: CREATE_UPDATE_ORG_AUTO_APPROVAL_STATUS,
    payload
})


// Get organisation approval config
export const triggerOrgAutoApprovalConfig = (payload) => ({
    type: TRIGGER_ORG_AUTO_APPROVAL_CONFIG,
    payload
})

// GET Publisher
export const getPublisherReducer = (payload) => ({
    type: GET_PUBLISHER,
    payload
})


// Organisation file upload reducer
export const organisationFileUploadReducer = (payload) => ({
    type: ORGANISATION_FILE_UPLOAD,
    payload
})

// Organisation file upload tracking reducer
export const trackOrganisationFileUploadStatusReducer = (payload) => ({
    type: TRACK_ORGANISATION_FILE_UPLOAD_STATUS,
    payload
})


// Get Organization List
export const getOrgList = (payload) => {
    return (dispatch) => {
        let url = payload ? config.endpoint.org + '?domain=' + payload.group  : config.endpoint.org;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getOrgs(res.results))
                dispatch(orgListCount(res.count))
                resolve(res.results);
            }).catch(e => {
                reject(e) 
            })
        })
    }
}


// Get Organization List
export const getOrganisationList = (payload) => {
    return (dispatch) => {
        let url = payload ? config.endpoint.org + '?page=' + payload.pageNum : config.endpoint.org;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getOrgs(res.results))
                dispatch(orgListCount(res.count))
                resolve(res.results);
            }).catch(e => {
                reject(e) 
            })
        })
    }
}

// Get Organization List
export const getChildOrganisationList = (payload) => {
    return (dispatch) => {
        let url = payload ? config.endpoint.child_organisation + '?page='+payload.pageNum : config.endpoint.org;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getOrgs(res.results))
                dispatch(orgListCount(res.count))
                resolve(res.results);
            }).catch(e => {
                reject(e) 
            })
        })
    }
}

// Get Organization List
export const getOrgInfo = (id) => {
    return (dispatch) => {
        let url = config.endpoint.org + id;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                resolve(res);
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Request from hub
export const CreateOrg = (orgData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.createOrgHandler(orgData, token).then((res) => {
                dispatch(recievedOrgData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedCreatingOrg(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : {status: 500}
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedCreatingOrg(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        }) 
    }
}


export const UpdateOrg = (orgData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.updateOrgHandler(orgData, token).then((res) => {
                dispatch(updateOrgData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedUpdateOrg(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedUpdateOrg(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        })
    }
}


export const deleteOrg = (id) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.deleteOrgHander(id, token).then((res) => {
                dispatch(deleteOrgData(id))
                resolve({status: true})
            }, error => {
                console.log(error)
                dispatch(failedDeleteUser(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

export const singleOrg = (id) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.singleOrgHander(id, token).then((res) => {
                dispatch(singleOrgData(res))
                resolve({status: true})
            }, error => {
                console.log(error,'error error')
                dispatch(failedSingleOrgData(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve({ status: false })
            }).catch(reject)
        });
    }
}
// export const PublicOrg = (payload) => ({
//     type: GET_ORG_LIST,
//     payload
// })

export const getPublicOrg = () => {
    const url = config.endpoint.public_org;
    return dispatch => {
        api.get(url, "").then(res => {
            // console.log(res)
            dispatch(getOrgs(res.results));
        }, error => {
            console.log(error)
        })
    }
}

// export const getPublicPublisher = () => {
//     const url = config.endpoint.publisher;
//     return dispatch => {
//         api.get(url, "").then(res => {
//             // console.log(res)
//             dispatch(getPublisherReducer(res.results));
//         }, error => {
//             console.log(error)
//         })
//     }
// }


export const getPublicPublisher = () => {
    return (dispatch) => {
        let url = config.endpoint.publisher;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getPublisherReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => {
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}

export const getPublicOrgSignup = () => {
    const url = config.endpoint.public_org+'?page_size=9999999';
    return dispatch => {
        api.get(url, "").then(res => {
            // console.log(res)
            dispatch(getOrgs(res.results));
        }, error => {
            console.log(error)
        })
    }
}



// Get Currency  List 
export const getOrgFinancialReport = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get('organization-finance-report/'+id).then((res) => {
                console.log(res.data,'res.results res.results');
                dispatch(orgFinancialReport(res.data))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get organisation auto approval config
export const getOrganisationAutoApprovalConfig = () => {
    return (dispatch) => {
        let url = config.endpoint.org_auto_approval_config;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getOrgAutoApprovalConfig(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => {
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}

// Update organisation auto approval status
export const updateOrganisationAutoApprovalStatus = (id, payload) => {
    return (dispatch) => {
        let url = config.endpoint.org_auto_approval_config + id + '/';
        return new Promise((resolve, reject) => {
            api.put(url, payload).then((res) => {
                dispatch(createUpdateOrgAutoApprovalStatus(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => { 
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}


// Create organisation auto approval status
export const createOrganisationAutoApprovalStatus = (payload) => {
    return (dispatch) => {
        let url = config.endpoint.org_auto_approval_config;
        return new Promise((resolve, reject) => {
            api.post(url, payload).then((res) => {
                dispatch(createUpdateOrgAutoApprovalStatus(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => {
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}


// Trigger organisation auto approval config
export const triggerOrganisationAutoApprovalConfig = (payload) => {
    return (dispatch) => {
        let url = config.endpoint.org_auto_approval_config_trigger + '?' + payload;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(triggerOrgAutoApprovalConfig(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => {
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}

// Update child organisation
export const updateChildOrganisation = (id, payload) => {
    return (dispatch) => {
        let url = config.endpoint.child_organisation + id + '/';
        return new Promise((resolve, reject) => {
            api.put(url, payload).then((res) => {
                dispatch(updateChildOrg(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(error => {
                reject(Object.assign(error, { status: false }))
            })
        })
    }
}

// Organisation file upload action
export const organisationFileUpload = (payload) => {
    let url = config.endpoint.organisation_file_upload;
    return (dispatch, getState) => {
        const token = getState().auth.token;

        return new Promise((resolve, reject) => {
            let filename = payload.get('filename');
            let headers = {
                'Content-Disposition': `attachment; filename="${filename}"`,
            };

            payload.delete('filename');

            api.post(url, payload, token, headers).then((res) => {
                dispatch(organisationFileUploadReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                console.log("error: ", error);

                dispatch(organisationFileUploadReducer(error.response))
                reject(Object.assign(error.response, { status: false }));
            })
        })
    }
}

// Track file upload status
export const trackOrganisationFileUploadStatus = (payload) => {
    let url = payload.upload_status;
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(trackOrganisationFileUploadStatusReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                console.log("error: ", error);
                dispatch(trackOrganisationFileUploadStatusReducer(error.response))
                reject(Object.assign(error.response, { status: false }));
            })
        })
    }
}
