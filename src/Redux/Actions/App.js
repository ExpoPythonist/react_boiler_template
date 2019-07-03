import {
    GET_COUNTRIES,
    GET_STATE_LIST,
    GET_CITY_LIST
} from '../Constants'
import config from '../../config'

import {
    api
} from '../../core/api';


export const getCountries = (payload = {}) => ({
    type: GET_COUNTRIES,
    payload
})

export const getStateList = (payload = {}) => ({
    type: GET_STATE_LIST,
    payload
})

export const getCityList = (payload = {}) => ({
    type: GET_CITY_LIST,
    payload
})

export const getAllCountry = (payload = {}) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        api.getCountryHandler(token).then(res => {
            dispatch(getCountries(res.results))
        }, error => {
            console.log(error)
        })
    }
}

export const getAllState = (payload) => {
    return (dispatch, getState) => {
        let qs = '';
        if (payload.hasOwnProperty('page_size')) {
            qs = `&page_size=${payload.page_size}`;
        }
        let url = config.endpoint.state + '?parent=' + payload.country + qs;
        return new Promise((resolve, reject) => {
            api.get(url).then(res => {
                console.log(res)
                dispatch(getStateList(Object.assign(res, {
                    index: payload.index
                })))
                resolve(Object.assign(res, {
                    status: true
                }));
            }, error => {
                console.log(error)
                reject(Object.assign(error, {
                    status: false
                }));
            })
        })
    }
}

export const getAllCity = (payload) => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        return new Promise((resolve, reject) => {
            api.getCityHandler(payload, token).then(res => {
                dispatch(getCityList(Object.assign(res, {
                    index: payload.index
                })))
                resolve(Object.assign(res, {
                    status: true
                }));
            }, error => {
                console.log(error)
                reject(Object.assign(error, {
                    status: false
                }));
            })
        })
    }
}