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

export function getCategry() {
  try {
    return $.get(`${HOST}/taxons?treed=1&include=children`);
  } catch (error) {
    console.error(error);
  }
}

export function getDeals() {
  try {
    return $.get(`${HOST}/deals`);
  } catch (error) {
    console.error(error);
  }
}

export function userLogin(params) {
  try {
    return $.post(`${HOST}/auth`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getUserInfo() {
  try {
    return $.get(`${HOST}/user`, {});
  } catch (error) {
    console.error(error);
  }
}