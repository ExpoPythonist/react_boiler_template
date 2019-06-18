import { ADD_UPDATE_ARTICLE } from '../Constants.js'
import { api } from '../../Api/Restapi';


export const getCountries = (payload = {}) => ({
    type: ADD_UPDATE_ARTICLE,
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
