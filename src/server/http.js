import {fetch as fetchPolyfill} from 'whatwg-fetch'

function cfg() {
  // const token = Token ? `Bearer ${Token}` : '';
  const header = {
    Accept: 'application/x.bestshop.v1+json',
    'Content-Type': 'application/json',
    Authorization: 'token',
    Uuid: '3743ef45-c358-4aec-85d7-542509bc47a1'
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
      .then(responseJson => responseJson)
      .catch((error) => {
        console.error(error);
      });
  }

  static post(url, params) {
    // fetch请求
    return fetchPolyfill(url, {
      method: 'POST',
      headers: cfg(),
      // body: params,
      body: JSON.stringify(params),
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }

  static file(url, data) {
    // const photo = { uri: 'file:///Users/bestkit/Library/Developer/CoreSimulator/Devices/F77866AE-30F7-44CC-B3A8-F906637E3006/data/Containers/Data/Application/FAB7BF7B-14CA-4772-93CF-50C3A7EF3D3D/Documents/338F9469-4F87-490F-8385-358912025EA8.jpg' };
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
    // })
  }


  static put(url, params) {
    // fetch请求
    return fetchPolyfill(url, {
      method: 'PUT',
      headers: cfg(),
      // body: params,
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
      // body: params,
      // body: JSON.stringify(params),
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  }
}

/**

//post请求
let params = {'key1':'value1','key2':'value2'};
NetRequest.postJSON('http://www.baidu.com/',params,function (set) {
    //下面的就是请求来的数据
    console.log(set)
})

//get请求,以百度为例,没有参数,没有header
NetRequest.get('https://www.baidu.com/','',function (set) {
    //下面是请求下来的数据
    console.log(set)
})
*
*/
