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
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status_code === 401) {
          window.location.href='/login'
        } else {
          return responseJson
        }
      })
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
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch((error) => {
        console.log(`error = ${error}`);
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
      .then((responseJson) => {
        console.log(responseJson);
        console.log('image uploaded');
        return responseJson;
      })
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
      .then(responseJson => responseJson)
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
      .then(responseJson => responseJson)
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }
}

