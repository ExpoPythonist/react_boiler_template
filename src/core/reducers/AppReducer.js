import { GET_GROUPS, GET_ROLES, GET_ORG_LIST, GET_COUNTRIES, GET_CITY_LIST, GET_STATE_LIST } from "../../config";

// import {APP_LOADED, APP_UNLOADED, QITEM_CLICKED} from "../actions/ActionTypes"

let geoLocation = [];

const AppReducer = (state = {}, action) => {
    switch(action.type) {
      case "APP_LOADED":
        return {
          ...state,
          appLoaded: true
        };
      case "ATTACH_LOGGER":
        return {
          ...state,
          logger: action.loggerInstance
        }
      case "ATTACH_LOCAL_STORAGE":
        return {
          ...state,
          storageInstance: action.storageInstance
        }
      case "ATTACH_CLIENT_ID":
        return {
           ...state,
           clientId: action.clientId
        }
      case GET_GROUPS:
        return state = {
          ...state,
          groups: action.payload
        }
      case GET_ROLES:
        return state = {
          ...state,
          roles: action.payload
        }
      case GET_ORG_LIST:
        return state = {
          ...state,
          organizations: action.payload
        }
      case GET_COUNTRIES: {
        return state = {
          ...state,
          countries: action.payload
        }
      }
      case GET_STATE_LIST: {
        // console.log('Hokk', action.payload)
        let geoAddress = geoLocation[action.payload.index] || {};
        geoLocation[action.payload.index] = Object.assign(geoAddress, { states: action.payload.results })
        return state = {
          ...state,
          geoLocation
        }
      }
      case GET_CITY_LIST: {
        let geoAddress = geoLocation[action.payload.index] || {};
        geoLocation[action.payload.index] = Object.assign(geoAddress, { cities: action.payload.results })
        return state = {
          ...state,
          geoLocation
        }
      }
      default:
        return state;
    }
  }
export default AppReducer; 