import config, { DEPOSIT_FUND, DEPOSIT_FUND_LIST } from "../../config";
import { api } from "../../core/api";

export const DepositFund = (payload) => ({
    type: DEPOSIT_FUND,
    payload
})

export const DepositFundList = (payload) => ({
    type: DEPOSIT_FUND_LIST,
    payload
})

export const DepositPubFund = (payload) => {
    return (dispatch) => {
        const url = config.endpoint.deposit_fund
        return new Promise((resolve, reject) => {
            api.post(url, payload).then((res) => resolve(), error => {
                if (error.response) {
                    delete error.config;
                    delete error.headers;
                    delete error.request;
                    delete error.response.request;
                    delete error.response.headers;
                    delete error.response.config;
                    resolve(error.response)
                } else {
                    error.response.status = 500
                    resolve({
                        status: 500
                    })
                }
                dispatch(DepositFund(error.response))
            })
        })
    }
}

// Get Organization List
export const GetPubList = (payload) => {
    return () => {
        let url = config.endpoint.publisher;
        // let url = payload ? config.endpoint.org + '?domain=' + payload.group  : config.endpoint.org;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                resolve(res.results);
            }).catch(e => {
                reject(e)
            })
        })
    }
}


// Get Organization List
export const GetOaPubList = (payload) => {
    return () => {
        let url = config.endpoint.oa_publisher;
        // let url = payload ? config.endpoint.org + '?domain=' + payload.group  : config.endpoint.org;
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                resolve(res.results);
            }).catch(e => {
                reject(e)
            })
        })
    }
}

export const GetDepositList = () => {
    return (dispatch) => {
        const url = config.endpoint.deposit_fund
        return new Promise((resolve, reject) => {
            api.get(url).then((res) => {
                dispatch(DepositFundList(res.results))
                resolve(res.results)
            }, error => reject(error))
        })
    }
}

