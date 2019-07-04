const url = process.env.REACT_APP_API_ENDPOINT || 'http://dev.api.oametrix.io/';
const baseURL = url + 'api/v1/';
// output: http://dev.api.oametrix.io/api/v1/
export const config = {
  baseURL,
  endpoint: {
    login: 'login/',
    sign_up: 'registration/',
    logout: 'logout/'
  }
}