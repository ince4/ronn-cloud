import axios from 'axios';
import { getBaseUrl } from './common'

const baseUrl = getBaseUrl()
axios.defaults.withCredentials = true

async function request(pathname, data) {
  const res = await axios({
    method: 'post',
    url: `${baseUrl}/api/${pathname}`,
    data,
  });

  return res.data
}

async function requestFormData(pathname, data) {
  const res = axios({
    headers: {
      "Content-Type": "multipart/form-data"
    },
    method: 'post',
    url: `${baseUrl}/api/${pathname}`,
    data,
  });
  return res.data
}

export {
  request,
  requestFormData
}