import axios from '.'

/**
 * 获取当前IP的地区天气
 * @returns {Promise<AxiosResponse<T>>}
 */
export function getWeatherStatus () {
  return axios.get('https://free-api.heweather.net/s6/weather/now?location=119.511831,34.623379&key=a580a69c104d4fcc9d446cdfdc3c2632')
}
/**
 * 获取隐患排查数据
 */
export function getScreenStatus () {
  return axios.get(baseAPI+'/api/OpenApi/getScreenInfo')
}
/**
 * 获取二道門数据
 */
export const getTwoDoorsStatus = ({ MineCode }) => {
  const data = {
    MineCode
  }
  return axios.request({
    url: wlwAPI+'/v1/TwoDoors/Get',
    data,
    method: 'post'
  })
}
