import config, { GET_COUNTRIES, GET_STATE_LIST, GET_CITY_LIST } from '../Constants'
import { api } from '../../core/api';


export const getCountries = (payload = {}) => ({
    type: GET_COUNTRIES,
    payload
})