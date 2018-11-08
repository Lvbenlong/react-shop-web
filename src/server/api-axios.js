import axios from './axios'


export function userLogin(param) {
  return axios.post('/auth', param)
}