import BaseAPI from "./BaseAPI"
import config from '../index';
import store from '../../Redux/Store';

export class RestAPI extends BaseAPI {
    // Authentications
    signinHandler = ({
        username,
        password,
        timezone
    }) => {
        // url endpoints come from Endpoints.js - 'login/'
        let url = config.endpoint.login;
        let payload = {
            username,
            password,
            timezone
        };
        return this.callAPI(url, 'post', payload)
    }

    signupHandler = (payload = {}) => {
        let url = config.endpoint.sign_up;
        // console.log(payload)
        return this.callAPI(url, 'post', payload)
    }

    activateHandler = (payload = {}) => {
        let url = config.endpoint.active_account;
        // console.log(payload)
        return this.callAPI(url, 'post', payload)
    }

    logoutHandler = (token) => {
        let url = config.endpoint.logout;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', {}, {
            headers: {
                Authorization: accessToken
            }
        })
    }

    getGroupHandler = (token) => {
        let url = config.endpoint.group;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, {
            headers: {
                Authorization: accessToken
            }
        })
    }

    validateTokenHandler = (token) => {
        let url = config.endpoint.validate_token;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, {
            headers: {
                Authorization: accessToken
            }
        })
    }

    // Users
    getUserHandler = (token, payload) => {
        let url = config.endpoint.user + '?page=' + payload.pageNum + '&page_size=' + payload.pageSize;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, {
            headers: {
                Authorization: accessToken
            }
        });
    }


    get = (url, token = store.getState().auth.token, options = {}) => {
        let accessToken = 'token ' + token;
        if (token) {
            let headers = {
                Authorization: accessToken
            };
            options.headers && Object.assign(headers, options.headers);
            Object.assign(options, {
                headers: headers,
            });
            return this.callAPI(url, 'get', {}, options)
        } else {
            return this.callAPI(url, 'get');
        }
    }

    put = (url, payload, token = store.getState().auth.token) => {
        let accessToken = 'token ' + token;
        if (token) return this.callAPI(url, 'put', payload, {
            headers: {
                Authorization: accessToken
            }
        })
        else return this.callAPI(url, 'put', payload);
    }

    post = (url, payload, token = store.getState().auth.token, headers = {}) => {
        let accessToken = 'token ' + token;
        if (token) {
            Object.assign(headers, {
                Authorization: accessToken
            });
            return this.callAPI(url, 'post', payload, {
                headers: headers
            })
        } else {
            return this.callAPI(url, 'post', payload, {
                headers: headers
            });
        }
    }

    delete = (url, token = store.getState().auth.token) => {
        let accessToken = 'token ' + token;
        if (token) return this.callAPI(url, 'delete', {}, {
            headers: {
                Authorization: accessToken
            }
        })
        else return this.callAPI(url, 'delete');
    }
}

const api = new RestAPI();

export {
    api,
    RestAPI as
    default
};