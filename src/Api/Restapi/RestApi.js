import BaseAPI from "./BaseAPI"
import config from '../../config';
import store from '../context/store';

export class RestAPI extends BaseAPI{
    // Authentications
    signinHandler = ({ username, password,timezone }) => {
        // url endpoints come from Endpoints.js - 'login/'
        let url = config.endpoint.login;
        let payload = { username, password,timezone };
        return this.callAPI(url, 'post', payload)
    }

    get = (url, token = store.getState().auth.token, options = {}) => {
        let accessToken = 'token ' + token;
        if (token) {
            let headers = { Authorization: accessToken };
            options.headers && Object.assign(headers, options.headers);
            Object.assign(options, { headers: headers, });
            return this.callAPI(url, 'get', {}, options)
        } else {
            return this.callAPI(url, 'get');
        }
    }

    put = (url, payload, token = store.getState().auth.token) => {
        let accessToken = 'token ' + token;
        if (token) return this.callAPI(url, 'put', payload, { headers: { Authorization: accessToken } })
        else return this.callAPI(url, 'put', payload);
    }

    post = (url, payload, token = store.getState().auth.token, headers = {}) => {
        let accessToken = 'token ' + token;
        if (token) {
            Object.assign(headers, { Authorization: accessToken });
            return this.callAPI(url, 'post', payload, { headers: headers })
        } else {
            return this.callAPI(url, 'post', payload, { headers: headers });
        }
    }

    delete = (url, token = store.getState().auth.token) => {
        let accessToken = 'token ' + token;
        if (token) return this.callAPI(url, 'delete', {}, { headers: { Authorization: accessToken } })
        else return this.callAPI(url, 'delete');
    }
}

const api = new RestAPI();

export {
    api,
    RestAPI as default
};