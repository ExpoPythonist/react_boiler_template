import axios from "axios";
import {
  GET_ARTICLE_LIST
} from '../Constants'

// import config from '../../config'
// import {
//     api
// } from '../../config/api';
//
// export const getArticles = (payload) => ({
//     type: GET_ARTICLE_LIST,
//     payload
// });

// export const articleListFromAPI = () => {
//     return (dispatch, getState) => {
//         return new Promise((resolve, reject) => {
//             api.get(url).then((res) => {
//                 dispatch(getArticles(res));
//                 resolve(Object.assign(res, {status: true}));
//             }).catch(function (error) {
//                 reject(Object.assign(error.response, {status: false}));
//             })
//
//         })
//     }
// };


export function getarticlelist() {
  const request = axios
    .get('http://c33a3706.ngrok.io/api/v1/article-full/')
    .then(response => response.data).catch(err => console.log(err));

  return {
    type: GET_ARTICLE_LIST,
    payload: request
  };
}