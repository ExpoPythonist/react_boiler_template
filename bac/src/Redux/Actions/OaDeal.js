import { api } from "../../core/api";
import config from "../../config";

export const GetOaDeal = (id) => {
    return () => {
        let url = config.endpoint.oa_deal + "?organisation=" + id;
        return new Promise((resolve, reject) => {
            api.get(url).then(res => resolve(res.results), error => reject(error))
        })
    }
}

export const getCurrency = () => {
    return () => {
        const url = config.endpoint.currency;
        return new Promise((resolve, reject) => {
            api.get(url+"?page_size=99999").then((res) => {
                resolve(res.results)
            }, error => {
                delete error.config;
                delete error.headers;
                delete error.request;
                delete error.response.request;
                delete error.response.headers;
                delete error.response.config;
                reject(error.response);
            })
        })
    }
}