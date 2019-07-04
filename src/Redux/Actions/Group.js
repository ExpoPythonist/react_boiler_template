import config, { CREATE_GROUP ,GET_GROUP_LIST,DELETE_GROUP,UPDATE_GROUP,PARENT_GROUP_LIST} from "../../config";
import { api } from "../../core/api";


// Loaded into App Reducers
export const createGroupeducer = (payload) => ({
    type: CREATE_GROUP,
    payload
})

export const groupList = (payload) => ({
    type: GET_GROUP_LIST,
    payload
})

export const deleteGroupData = (payload) => ({
    type: DELETE_GROUP,
    payload
})

export const updateGroupData = (payload) => ({
    type: UPDATE_GROUP,
    payload
})

export const getParentGroupreducer = (payload) => ({
    type: PARENT_GROUP_LIST,
    payload
})

export const createGroup = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.group;
        return new Promise((resolve, reject) => {
            api.post(url,payload).then((res) => {
                dispatch(createGroupeducer(res.results))
                resolve(res.results)
            }, error => {
                reject(error.response);
            })
        })
    }
}

// Get Parent Group  List
export const getParentGroupListTable = () => {
    return (dispatch) => {
        const url = config.endpoint.group_top;
        return new Promise((resolve, reject) => {
            api.get(url+'?page_size=999999').then((res) => {
                dispatch(getParentGroupreducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Group  List
export const getGroupListTable = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.group;
        return new Promise((resolve, reject) => {
            api.get(url+'?page='+payload.pageNum+'&page_size='+payload.pageSize).then((res) => {
                dispatch(createGroupeducer(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}
// Delete
export const deleteGroup = (id) => {
    return (dispatch) => {
        const url = config.endpoint.group;
        return new Promise((resolve, reject) => {
            return api.delete(url + id + '/').then((res) => {
                dispatch(deleteGroupData(id))
                resolve({ status: true })
            }, error => {
                console.log(error)
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

// Update 

export const UpdateGroup = (id, payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const url = config.endpoint.group;
            return api.put(url + id + '/', payload).then((res) => {
                console.log(res, 'update status');
                dispatch(updateGroupData(
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