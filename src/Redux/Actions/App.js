import axios from 'axios'
// import { ADD_UPDATE_ARTICLE } from '../Constants.js'
// import { api } from '../../Api/Restapi';


export const loginUser = (payload = {}) => {
 return {
    type:"LOgin_user",
    payload
 }
}


// export const getAllCountry = (payload = {}) => {
//     return (dispatch, getState) => {
//         const token = getState().auth.token;
//         api.getCountryHandler(token).then(res => {
//             dispatch(getCountries(res.results))
//         }, error => {
//             console.log(error)
//         })
//     }
// }

