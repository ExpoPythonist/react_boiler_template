import config, { GET_JOURNAL_LIST, JOURNAL_FILE_UPLOAD, TRACK_JOURNAL_FILE_UPLOAD_STATUS, REQUEST_CREATE_JOURNAL, FAILED_CREATE_JOURNAL, GET_JOURNAL_LIST_ALL, REQUEST_UPDATE_JOURNAL, DELETE_JOURNAL_DATA, REQUEST_FAILED_DELETE_USER, SINGLE_JOURNAL_DATA, FAILED_SINGLE_JOURNAL_DATA, GET_PUBLICATION_TYPE, FAILED_PUBLICATION_TYPE, GET_JOURNAL_TYPE, GET_CONTENT_TYPE, REQUEST_CREATE_PUBLICATION, FAILED_CREATE_PUBLICAITON } from "../../config";
import { api } from "../../core/api";



// Loaded into App Reducers
export const getJournals = (payload) => ({
    type: GET_JOURNAL_LIST,
    payload
})

// Loaded into App Reducers
export const getAllJournals = (payload) => ({
    type: GET_JOURNAL_LIST_ALL,
    payload
})

// Sign Up Action Creator
export const recievedJournalData = (payload) => ({
    type: REQUEST_CREATE_JOURNAL,
    payload
})

// Failed Response
export const failedCreatingJournal = (payload) => ({
    type: FAILED_CREATE_JOURNAL,
    payload
})

export const failedUpdateJournal = (payload) => ({
    type: REQUEST_UPDATE_JOURNAL,
    payload
})


export const updateJournalData = (payload) => ({
    type: REQUEST_UPDATE_JOURNAL,
    payload
})

export const failedDeleteUser = (payload) => ({
    type: REQUEST_FAILED_DELETE_USER,
    payload
})

// Clearing failer status
export const deleteJournalData = (id) => ({
    type: DELETE_JOURNAL_DATA,
    id
})

export const singleJournalData = (payload) => ({
    type: SINGLE_JOURNAL_DATA,
    payload
})

export const failedSingleJournalData = (payload) => ({
    type: FAILED_SINGLE_JOURNAL_DATA,
    payload
})

export const getPublicationType = (payload) => ({
    type: GET_PUBLICATION_TYPE,
    payload
})

export const getJournalType = (payload) => ({
    type: GET_JOURNAL_TYPE,
    payload
})

export const getContentType = (payload) => ({
    type: GET_CONTENT_TYPE,
    payload
})

export const failedPublicationType = (payload) => ({
    type: FAILED_PUBLICATION_TYPE,
    payload
})

export const recievedPublicationData = (payload) => ({
    type: REQUEST_CREATE_PUBLICATION,
    payload
})

export const failedCreatingPublication = (payload) => ({
    type: FAILED_CREATE_PUBLICAITON,
    payload
})

// Journal file upload reducer
export const journalFileUploadReducer = (payload) => ({
    type: JOURNAL_FILE_UPLOAD,
    payload
})

// Journal file upload tracking reducer
export const trackJournalFileUploadStatusReducer = (payload) => ({
    type: TRACK_JOURNAL_FILE_UPLOAD_STATUS,
    payload
})


// Get Content Type List
export const getContentTypeList = (payload) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        return new Promise((resolve, reject) => {
            api.getContentTypeHandler(token).then((res) => {
                dispatch(getContentType(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Journal Type List
export const getJournalTypeList = (payload) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        return new Promise((resolve, reject) => {
            api.getJournalTypeHandler(token).then((res) => {
                dispatch(getJournalType(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Publication Type List
export const getPublicatonTypeList = (payload) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        return new Promise((resolve, reject) => {
            api.getPublicatonTypeHandler(token).then((res) => {
                // console.log(res.results)
                dispatch(getPublicationType(res.results))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Journalanization List
export const getJournalList = (payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.get('publication?page='+payload.pageNum).then((res) => {
                dispatch(getJournals(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Request from hub
export const CreateJournal = (JournalData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.createJournalHandler(JournalData, token).then((res) => {
                dispatch(recievedJournalData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedCreatingJournal(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedCreatingJournal(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        })
    }
}

export const CreatePublication = (PublicationData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.createPublicationHandler(PublicationData, token).then((res) => {
                dispatch(recievedPublicationData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedCreatingPublication(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedCreatingJournal(
                    Object.assign({ status: 500 })
                ))
                reject(error)
            })
        })
    }
}


export const UpdateJournal = (id, payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            return api.put('publication/' + id + '/', payload).then((res) => {
                console.log(res, 'update status');
                dispatch(updateJournalData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedUpdateJournal(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedUpdateJournal(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        })
    }
}


export const deleteJournal = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return api.delete('publication/' + id + '/').then((res) => {
                dispatch(deleteJournalData(id))
                resolve({ status: true })
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

export const singleJournal = (id) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.singleJournalHander(id, token).then((res) => {
                dispatch(singleJournalData(res))
                resolve({ status: true })
            }, error => {
                console.log(error, 'error error')
                dispatch(failedSingleJournalData(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve({ status: false })
            }).catch(reject)
        })
    }
}


// Journal file upload action
export const journalFileUpload = (payload) => {
    let url = config.endpoint.journal_file_upload;
    return (dispatch, getState) => {
        const token = getState().auth.token;

        return new Promise((resolve, reject) => {
            let filename = payload.get('filename');
            let headers = {
                'Content-Disposition': `attachment; filename="${filename}"`,
            };

            payload.delete('filename');

            api.post(url, payload, token, headers).then((res) => {
                dispatch(journalFileUploadReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                console.log("error: ", error);

                dispatch(journalFileUploadReducer(error.response))
                reject(Object.assign(error.response, { status: false }));
            })
        })
    }
}

// Track file upload status
export const trackJournalFileUploadStatus = (payload) => {
    let url = payload.upload_status;
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(trackJournalFileUploadStatusReducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(function (error) {
                console.log("error: ", error);
                dispatch(trackJournalFileUploadStatusReducer(error.response))
                reject(Object.assign(error.response, { status: false }));
            })
        })
    }
}
