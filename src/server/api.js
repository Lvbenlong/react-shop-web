import $ from './http'
const HOST = 'http://123.207.65.111:8001/api';


// get code test get music data
export function getMusic() {
  try {
    return $.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20');
  } catch (error) {
    console.error(error);
  }
}

export function getVideoList(params) {
  try {
    return $.get(`${HOST}/videos?include=product.in_cart,product.variant,recommended_users&type=0`, params);
  } catch (error) {
    console.error(error);
  }
}