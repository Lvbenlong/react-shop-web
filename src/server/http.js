import {fetch as fetchPolyfill} from 'whatwg-fetch'
import storage from '../utils/storage'
import { generateUuid } from '../utils/tool'

function cfg() {
  let uuid = storage.get('uuid')
  let token = storage.get('token')
  if (!uuid) {
    uuid = generateUuid()
    storage.set('uuid', uuid)
  }
  const header = {
    Accept: 'application/x.bestshop.v1+json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    Uuid: uuid
  };
  return header;
}

/**** 
 * 这主要是由fetch返回promise导致的，
 * 因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，
 * 相反它会被resolve；
 * 只有网络错误会导致请求不能完成时，fetch 才会被 reject；
 * 所以一般会对fetch请求做一层封装，
*/
async function checkStatus(response) {
  console.log(response)
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // 拦截401 权限跳转至登录页
  if (response.status === 401) {
    window.location.href='/login'
  }
  const error = new Error(response)
  error.message = (await response.json()).errors
  throw error;
}

export default class HTTP {
  static get(url, params) {
    if (params) {
      const paramsArray = [];
      // 拼接参数
      Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));
      if (url.search(/\?/) === -1) {
        url += `?${paramsArray.join('&')}`;
      } else {
        url += `&${paramsArray.join('&')}`;
      }
    }
    // fetch请求
    return fetchPolyfill(url, {
      method: 'GET',
      headers: cfg(),
    })
      .then(checkStatus)
      .then(response => response.json())
      .catch((error) => {
        console.error('error');
        console.error(error);
      });
  }

  static post(url, params) {
    // fetch请求
    return fetchPolyfill(url, {
      method: 'POST',
      headers: cfg(),
      body: JSON.stringify(params),
    })
    .then(checkStatus)
      .then(response => response.json())
      .catch((error) => {
        console.log(error)
        throw error
      });
  }

  static file(url, data) {
    const photo = { uri: data };
    const formdata = new FormData();
    formdata.append('product', { uri: photo.uri, name: 'image.jpg', type: 'multipart/form-data' });

    return fetchPolyfill(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then(response => response.json())
      .catch((err) => {
        console.log(err);
      });
  }


  static put(url, params) {
    // fetch请求
    return fetchPolyfill(url, {
      method: 'PUT',
      headers: cfg(),
      body: JSON.stringify(params),
    })
      .then(response => response.json())
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }

  static delete(url) {
    // fetch请求
    return fetchPolyfill(url, {
      method: 'DELETE',
      headers: cfg(),
    })
      .then(response => response.json())
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }
}

