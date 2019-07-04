import BaseAPI from "./BaseAPI"
import config from '../../config';
import store from '../../Redux/Store';

export class RestAPI extends BaseAPI{
    // Authentications
    signinHandler = ({ username, password,timezone }) => {
        // url endpoints come from Endpoints.js - 'login/'
        let url = config.endpoint.login; 
        let payload = { username, password,timezone };
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
        return this.callAPI(url, 'post', {}, { headers: { Authorization: accessToken } })
    }

    getGroupHandler = (token) => {
        let url = config.endpoint.group;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }

    validateTokenHandler = (token) => {
        let url = config.endpoint.validate_token;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }
    
    // Users
    getUserHandler = (token,payload) => {
        let url = config.endpoint.user+'?page='+payload.pageNum+'&page_size='+payload.pageSize;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    createUserHandler = (payload, token) => {
        let url = config.endpoint.user;
        // console.log(payload)
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: accessToken } });
    }

    updateUserHandler = (payload, token) => {
        let userId = payload.id;
        let url = config.endpoint.user + userId + "/";
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'put', payload, { headers: { Authorization: accessToken } });
    }

    deleteUserHander = (userId, token) => {
        let url = config.endpoint.user + userId + "/";
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'delete', {}, { headers: { Authorization: accessToken } });
    }

    // Organizations
    getOrgHandler = (payload, token) => {
        let url = config.endpoint.org + '?domain=' + payload.group;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }

    getOrgAllHandler = (token) => {
        let url = config.endpoint.org;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    createOrgHandler = (payload, token) => {
        let url = config.endpoint.org;
        // console.log(payload)
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: accessToken } });
    }

    updateOrgHandler = (payload, token) => {
        let orgId = payload.id;
        let url = config.endpoint.org + orgId + "/";
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'put', payload, { headers: { Authorization: accessToken } });
    }

    deleteOrgHander = (OrgId, token) => {
        let url = config.endpoint.org + OrgId + "/";
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'delete', {}, { headers: { Authorization: accessToken } });
    }

    singleOrgHander = (OrgId, token) => {
        let url = config.endpoint.org + OrgId;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    // Journal 

    createPublicationHandler = (payload, token) => {
        let url = config.endpoint.pulication;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: accessToken } });
    }

    createJournalHandler = (payload, token) => {
        let url = config.endpoint.journal;
        // console.log(payload)
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: accessToken } });
    }
    
    getPublicatonTypeHandler = (token) => {
        let url = config.endpoint.publication_type;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    getJournalTypeHandler = (token) => {
        let url = config.endpoint.journal_type;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    getContentTypeHandler = (token) => {
        let url = config.endpoint.content_type;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    singleJournalHander = (journalId, token) => {
        let url = config.endpoint.pulication + journalId;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } });
    }

    // Roles
    createRoleHandler = (payload, token) => {
        let url = config.endpoint.role;
        // console.log(payload)
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: accessToken } });
    }

    getRoleHandler = (token) => {
        let url = config.endpoint.role;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }

    // Countries
    getCountryHandler = (token) => {
        let url = config.endpoint.country+'?page_size=9999';
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }

    getStateHandler = (payload, token) => {
        let qs = '';
        if (payload.hasOwnProperty('page_size')) {
            qs = `&page_size=${payload.page_size}`;
        }
        let url = config.endpoint.state + '?parent=' + payload.country + qs;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
    }

    getCityHandler = (payload, token) => {
        let qs = '';
        if (payload.hasOwnProperty('page_size')) {
            qs = `&page_size=${payload.page_size}`;
        }
        let url = config.endpoint.city + '?parent=' + payload.state + qs;
        let accessToken = 'token ' + token;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: accessToken } })
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