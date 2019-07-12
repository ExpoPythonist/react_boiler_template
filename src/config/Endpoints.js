const url = 'http://127.0.0.1:8000/';
const baseURL = url + 'api/v1/';
export const config = {
  baseURL,
  endpoint: {
    login: 'login/',
    sign_up: 'registration/',
    logout: 'logout/',
    articlelist: 'article-full/',
    single_article: 'article-full/',

  },
}