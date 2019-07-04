const url = process.env.REACT_APP_API_ENDPOINT || 'test.io/';
const baseURL = url + 'api/v1/';
export const config = {
  baseURL,
  endpoint: {
    login: 'login/',
    sign_up: 'registration/',
    logout: 'logout/',

  },
}