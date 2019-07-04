import config, { FAILED_CREATE_USER, REQUEST_CREATE_USER, GET_ALL_USER, CLEAR_FAILED_STATUS, REQUEST_UPDATE_USER, FAILED_UPDATE_USER, DELETE_USER_DATA } from "../../config";
import { api } from "../../core/api";

let url

// Sign Up Action Creator
export const recievedUserData = (payload) => ({
    type: REQUEST_CREATE_USER,
    payload
})

export const failedCreatingUser = (payload) => ({
    type: FAILED_CREATE_USER,
    payload
})

// Sign Up Action Creator
export const updateUserData = (payload) => ({
    type: REQUEST_UPDATE_USER,
    payload
})

export const failedUpdateUser = (payload) => ({
    type: FAILED_UPDATE_USER,
    payload
})

export const getUsers = (payload) => ({
    type: GET_ALL_USER,
    payload
})

// Clearing failer status
export const ClearStatus = () => ({
    type: CLEAR_FAILED_STATUS
})

// Clearing failer status
export const deleteUserData = (id) => ({
    type: DELETE_USER_DATA,
    id
})

// Request from hub
export const CreateUser = (userData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.createUserHandler(userData, token).then((res) => {
                dispatch(recievedUserData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedCreatingUser(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedCreatingUser(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        })
    }
}

// Get Journalanization List
export const CreateUserUni = (payload) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            let url = config.endpoint.user;
            api.post(url,payload).then((res) => {
                dispatch(recievedUserData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                dispatch(recievedUserData(
                    e.response ? Object.assign(e.response.data, { status: e.response.status }) : { status: 500 }
                ))
                resolve(Object.assign(e.response.data, { status: false }));
            })
        })
    }
  }

export const UpdateUser = (userData = {}) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.updateUserHandler(userData, token).then((res) => {
                dispatch(updateUserData(
                    Object.assign(res.data, { status: res.status })
                ))
                resolve(res.data)
            }, error => {
                dispatch(failedUpdateUser(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                reject(error)
            }).catch(error => {
                dispatch(failedUpdateUser(
                    Object.assign({ status: 500 })
                ))
                reject(error)
                console.log('Something error')
            })
        })


    }
}

export const deleteUser = (id) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token;
            return api.deleteUserHander(id, token).then((res) => {
                dispatch(deleteUserData(id))
                resolve({ status: true })
            }, error => {
                console.log(error)
                dispatch(failedUpdateUser(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve({ status: false })
            }).catch(reject)
        })
    }
}

export const getSingleUser = (userId) => {
    return () => {
        url = config.endpoint.user + userId + "/";
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                resolve(res)
            }, error => {
                reject(error)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}


export const getAllUser = (payload) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        return new Promise((resolve, reject) => {
            api.getUserHandler(token,payload).then((res) => {
                // console.log(res.results)
                dispatch(getUsers(res))
            }, error => {
                dispatch(failedUpdateUser(
                    error.response ? Object.assign(error.response.data, { status: error.response.status }) : { status: 500 }
                ))
                resolve(error);
            }).catch((error) => {
                resolve(error);
            })
        })
    }
}