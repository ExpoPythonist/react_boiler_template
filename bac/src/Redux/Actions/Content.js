import config, { CREATE_CONTENT_TYPE ,DELETE_CONTENT_TYPE_DATA,GET_CONTENT_TYPE,UPDATE_CONTENT_TYPE_DATA} from "../../config";
import { api } from "../../core/api";


// Loaded into App Reducers
export const createContentTypeReducer = (payload) => ({
    type: CREATE_CONTENT_TYPE,
    payload
})

export const contentTypeList = (payload) => ({
    type: GET_CONTENT_TYPE,
    payload
})

export const deleteContentTypeData = (payload) => ({
    type: DELETE_CONTENT_TYPE_DATA,
    payload
})

export const updateContentTypeData = (payload) => ({
    type: UPDATE_CONTENT_TYPE_DATA,
    payload
})

export const createContentType = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.content_type;
        return new Promise((resolve, reject) => {
            api.post(url,payload).then((res) => {
                dispatch(createContentTypeReducer(res.results))
                resolve(res.results)
            }, error => {
                reject(error.response);
            })
        })
    }
}

// Get Content Type List
export const getContentTypeListTable = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.content_type;
        return new Promise((resolve, reject) => {
            api.get(url+'?page='+payload.pageNum).then((res) => {
                dispatch(contentTypeList(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}
// Delete
export const deleteContentType = (id) => {
    return (dispatch) => {
        const url = config.endpoint.content_type;
        return new Promise((resolve, reject) => {
            return api.delete(url + id + '/').then((res) => {
                dispatch(deleteContentTypeData(id))
                resolve({ status: true })
            }, error => {
                console.log(error)
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Update 

export const UpdateContentType = (id, payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = config.endpoint.content_type;
            return api.put(url + id + '/', payload).then((res) => {
                console.log(res, 'update status');
                dispatch(updateContentTypeData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                reject(error)
            }).catch(error => {
                reject(error)
                console.log('Something error')
            })
        })
    }
}

