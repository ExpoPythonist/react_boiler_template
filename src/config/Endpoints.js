const url = process.env.REACT_APP_API_ENDPOINT || 'http://dev.api.oametrix.io/';
const baseURL = 'https://8b8a731c.ngrok.io/';
export const config = {
  baseURL,
  endpoint: {
    login: 'login/',
    sign_up: 'registration/',
    logout: 'logout/',

  },
}