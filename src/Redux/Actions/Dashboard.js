import config, { GET_DASHBOARD_DATA } from "../../config";
import { api } from "../../core/api";

const DashboardData = payload => ({
  type: GET_DASHBOARD_DATA,
  payload
})

export const getDashboardData = (payload) => {
  return dispatch => {
    const params = payload ? (payload.params || '') : '';
    const filter = payload ? (payload.filter || '') : '';
    const url = config.endpoint.dashboard + `?${params && params + '&'}${filter}`;
    api.get(url).then((res) => {
      dispatch(DashboardData(res.data))
    }, error => {
        if (error.code === 'ECONNABORTED') {
          dispatch(DashboardData({ success: undefined })) // Timeout
        }else if (error.response) {
          dispatch(DashboardData({ success: null })) // Unknown Error
        } else {
          dispatch(DashboardData({ success: false })) // No Internet Connection
        }
    })
  }
}
