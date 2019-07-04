import config, { APPROVED_DEPOSIT_LIST, PENDING_DEPOSIT_LIST } from "../../config";
import { api } from "../../core/api";

export const ApprovedList = (payload) => ({
    type: APPROVED_DEPOSIT_LIST,
    payload
})

export const PendingList = (payload) => ({
    type: PENDING_DEPOSIT_LIST,
    payload
})

// Approved Deposit List
export const DepositApproval = (ids) => {
    return (dispatch) => {
        const url = config.endpoint.deposit_fund+ids+'/approve/';
        return new Promise((resolve, reject) => {
            return api.put(url).then((res) => {
                resolve(Object.assign(res.data, res.status));
            }, error => {
                resolve({ status: false })
            }).catch(reject)
        })
    }
}


export const GetPendingDepositList = () => {
    return (dispatch) => {
        const url = config.endpoint.pending_deposit_fund
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(PendingList(res.results))
                resolve(res.results)
            }, error => {
                if (error.response) {
                    delete error.config;
                    delete error.headers;
                    delete error.request;
                    delete error.response.request;
                    delete error.response.headers;
                    delete error.response.config;
                    dispatch(PendingList(error.response))
                } else {
                    dispatch(PendingList({
                        status: 500
                    }))
                }
            })
        })
    }
}

export const GetApprovedDepositList = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.approveed_deposit_fund + '&page=' + payload.pageNum;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(ApprovedList(res))
                resolve(Object.assign(res, { status: true }));
            }, error => {
                if (error.response) {
                    delete error.config;
                    delete error.headers;
                    delete error.request;
                    delete error.response.request;
                    delete error.response.headers;
                    delete error.response.config;
                    dispatch(ApprovedList(error.response))
                } else {
                    dispatch(ApprovedList({
                        status: 500
                    }))
                }
            })
        })
    }
}