import config, { CONSORTIA_ADD_MEMBER,CONSORTIA_MEMBER_LIST} from "../../config";
import { api } from "../../core/api";


// Loaded into App Reducers
export const createConsortiaAddMember = (payload) => ({
    type: CONSORTIA_ADD_MEMBER,
    payload
})

export const consortiaMemberList = (payload) => ({
  type: CONSORTIA_MEMBER_LIST,
  payload
})

// Create Consortia Member
export const createConsortiaMember = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.consortium+payload.id+'/';
        return new Promise((resolve, reject) => {
            api.put(url,payload.member).then((res) => {
                dispatch(createConsortiaAddMember(res.results))
                resolve(res.results)
            }, error => {
                reject(error.response);
            })
        })
    }
}
// Get Consortia members
export const getConsortiaMembers = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.consortium;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(consortiaMemberList(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}
// Get Consortia members list
export const getConsortiaMembersList = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.consortium_member+'?page='+payload.pageNum+'&page_size='+payload.pageSize;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(consortiaMemberList(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}

// Get Consortia members list all
export const getConsortiaMembersListAll = () => {
    return (dispatch) => {
        const url = config.endpoint.consortium_member+'?page_size=9999999';;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(consortiaMemberList(res))
                resolve(Object.assign(res, { status: true }));
            }).catch(e => {
                reject(e)
            })
        })
    }
}


