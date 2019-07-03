import {
    GET_ROLES
} from '../Constants'
import {
    api
} from '../../core/api';
import config from '../../config'


export const createRoleAction = (payload) => ({

})

export const createRole = (payload) => {
    return () => {
        let url = config.endpoint.role;
        return new Promise((resolve, reject) => {
            api.post(url, payload).then((res) => {
                resolve(Object.assign(res.data, {
                    status: res.status
                }))
            }, error => {
                reject(error)
            }).catch((error) => {
                reject(error)
            })
        })

    }
}


// Loaded into App Reducers
export const getRoles = (payload) => ({
    type: GET_ROLES,
    payload
})


// Get Role List
export const getRoleList = () => {
    return (dispatch) => {
        let url = config.endpoint.role;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(getRoles(res.results))
                // console.log(res.results)
                resolve(res);
            }).catch(e => {
                reject(e)
            })
        })
    }
}