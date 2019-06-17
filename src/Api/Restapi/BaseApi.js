import axios from 'axios';
import config from '../../config';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.timeout = 1000;

class BaseAPI {
    constructor() {
        this.setBaseURL();
        this.requestHeaders = {
            // 'X-Requested-With': "XMLHttpRequest"
        }
    }

    setBaseURL = () => {
        this.baseURL = config.baseURL;
        // baseURL comes from Endpoint.js - http://dev.api.oametrix.io/api/v1/
    }
    callAPI = (url, method = "get", payload = {}, headers = {}) => {
        //example: 'login/' endpoints from RESTAPI.js file
        let apiUrl = this.baseURL + url;
        if (method === "get") {
            let promise = new Promise((resolve, reject) => {
                axios.get(apiUrl, headers).then((res) => resolve(res.data)).catch(reject);
            });
            return promise;
        } else if (method === "put") {
            let promise = new Promise((resolve, reject) => {
                axios.put(apiUrl, payload, headers).then((res) => resolve(res)).catch(reject);
            });
            return promise;
        } else if (method === "delete") {
            let promise = new Promise((resolve, reject) => {
                axios.delete(apiUrl, headers).then((res) => resolve(res)).catch(reject);
            });
            return promise;
        } else {
            let promise = new Promise((resolve, reject) => {
                axios.post(apiUrl, payload, headers).then((res) => resolve(res)).catch(reject);
            });
            return promise;
        }
    }

}

export default BaseAPI;
