import $ from './http'
const HOST = 'http://123.207.65.111:8001/api';


// const HOST = 'http://api.bestshop.test/api';
// const UPLOAD_IMAGE_URL = 'http://api.bestshop.test/images';
const UPLOAD_IMAGE_URL = 'http://api.bestshop.test/images';
const PAYMENT_HOST = 'http://api.bestshop.test/';


export function uploadImage(data) {
  try {
    return $.file(`${UPLOAD_IMAGE_URL}`, data);
  } catch (error) {
    console.error(error);
  }
}

// get code
export function getCode(params) {
  try {
    return $.post(`${HOST}/auth/code`, params);
  } catch (error) {
    console.error(error);
  }
}

// get code test get music data
export function getMusic() {
  try {
    return $.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1539226103750');
  } catch (error) {
    console.error(error);
  }
}

export function getPaymentUrl(orderNum) {
  return `${PAYMENT_HOST}orders/${orderNum}/payment?redirect_uri=http://localhost:8888/index.html?ordermun=${orderNum}`;
}

export function getLogintUrl(where) {
  return `http://api.bestshop.test/oauth/${where}`;
}

export function getVideoList(params) {
  try {
    return $.get(`${HOST}/videos?include=product.in_cart,product.variant,recommended_users&type=0`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getProductDetails(slug, params) {
  try {
    return $.get(`${HOST}/products/${slug}?include=images,official_video,kol_videos.user,variant`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getProductAttributes(id, params) {
  try {
    return $.get(`${HOST}/products/${id}/attributes`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getProductReviews(id, params) {
  try {
    return $.get(`${HOST}/products/${id}/reviews?include=user,rating_counts`, params);
  } catch (error) {
    console.error(error);
  }
}

export function userRegister(params) {
  try {
    return $.post(`${HOST}/users`, params);
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

export function userLogout() {
  try {
    return $.delete(`${HOST}/auth`);
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


export function getCategry() {
  try {
    return $.get(`${HOST}/taxons?treed=1&include=children`);
  } catch (error) {
    console.error(error);
  }
}

export function getCategoryList(slug, params) {
  try {
    // return $.get(`${HOST}/products?taxon_code=books&include=official_video,recommended_users,images,variant`, params);
    return $.get(`${HOST}/products?taxon_slug=${slug}&include=official_video,recommended_users,images,variant`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getCategoryListBySearch(searchcode, params) {
  try {
    return $.get(`${HOST}/products?q=${searchcode}&include=official_video,recommended_users,images,variant`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getCountry(params) {
  try {
    return $.get(`${HOST}/countries?include=provinces`, params);
  } catch (error) {
    console.error(error);
  }
}

export function storeAddress(params) {
  try {
    return $.post(`${HOST}/addresses`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getAllAddress(params) {
  try {
    return $.get(`${HOST}/addresses`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getAddressById(id) {
  try {
    return $.get(`${HOST}/addresses/${id}`, {});
  } catch (error) {
    console.error(error);
  }
}

export function updateAddress(id, params) {
  try {
    return $.put(`${HOST}/addresses/${id}`, params);
  } catch (error) {
    console.error(error);
  }
}

export function deleteAddress(id) {
  try {
    return $.delete(`${HOST}/addresses/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export function getProductVariant(id) {
  try {
    return $.get(`${HOST}/products/${id}/variants?include=option_values,options,image`);
  } catch (error) {
    console.error(error);
  }
}

export function storeWishList(params) {
  try {
    return $.post(`${HOST}/cart-items/`, params);
  } catch (error) {
    console.error(error);
  }
}


export function storeWishListQuantity(id, sum) {
  try {
    return $.put(`${HOST}/cart-items/${id}`, { quantity: sum });
  } catch (error) {
    console.error(error);
  }
}


// 将history的数据更新到wishlist
export function updateHistoryToWish(id) {
  try {
    return $.put(`${HOST}/cart-items/${id}`, { transition: 'restore' });
  } catch (error) {
    console.error(error);
  }
}


export function storeWishListWithId(params) {
  try {
    return $.post(`${HOST}/cart-items/`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getWishList() {
  try {
    return $.get(`${HOST}/cart-items?include=product.image,variant.option_values`, {});
  } catch (error) {
    console.error(error);
  }
}


export function updateWishListProduct(id, params) {
  try {
    return $.put(`${HOST}/cart-items/${id}`, params);
  } catch (error) {
    console.error(error);
  }
}


export function deleteWishList(id) {
  try {
    return $.delete(`${HOST}/cart-items/${id}`);
  } catch (error) {
    console.error(error);
  }
}


export function addToHistoryWishList(id, params) {
  try {
    return $.put(`${HOST}/cart-items/${id}`, params);
  } catch (error) {
    console.error(error);
  }
}


export function orderCheckout() {
  try {
    return $.post(`${HOST}/order/checkout`, {});
  } catch (error) {
    console.error(error);
  }
}

export function getOrderList() {
  try {
    return $.get(`${HOST}/order?include=items,shipping_adjustment`, {});
  } catch (error) {
    console.error(error);
  }
}

export function orderSelectAddress(params) {
  try {
    return $.post(`${HOST}/order/address?include=shipping_adjustment`, params);
  } catch (error) {
    console.error(error);
  }
}

export function orderCoupon(code) {
  try {
    return $.post(`${HOST}/order/coupon?include=shipping_adjustment`, { coupon_code: code });
  } catch (error) {
    console.error(error);
  }
}

export function orderComplete() {
  try {
    return $.post(`${HOST}/order/confirm`, {});
  } catch (error) {
    console.error(error);
  }
}

// 订单详情页
export function getOrderDetails(orderNum) {
  try {
    return $.get(`${HOST}/orders/${orderNum}?include=items,address,shipping_adjustment`, {});
  } catch (error) {
    console.error(error);
  }
}

export function getCoupons() {
  try {
    return $.get(`${HOST}/coupons?include=base`, {});
  } catch (error) {
    console.error(error);
  }
}

export function getOrderCoupons() {
  try {
    return $.get(`${HOST}/coupons?include=base,can_use&enabled`, {});
  } catch (error) {
    console.error(error);
  }
}

export function getMyOrderList(params) {
  try {
    return $.get(`${HOST}/orders?include=items`, params);
  } catch (error) {
    console.error(error);
  }
}

export function getPromotionCoupons() {
  try {
    return $.get(`${HOST}/promotion-coupons`);
  } catch (error) {
    console.error(error);
  }
}

// coupon list to details page
export function getPromotionCouponsDetail(id) {
  try {
    return $.get(`${HOST}/promotion-coupons/${id}?include=can_catch,caught`, {});
  } catch (error) {
    console.error(error);
  }
}


// get coupon in coupon component
export function getCouponList(data) {
  try {
    return $.post(`${HOST}/coupons`, data);
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

export function getDealDetails(code) {
  try {
    return $.get(`${HOST}/deals/${code}`);
  } catch (error) {
    console.error(error);
  }
}

// 确认收货
export function orderFullfill(orderNum) {
  try {
    return $.post(`${HOST}/orders/${orderNum}/fulfill`, {});
  } catch (error) {
    console.error(error);
  }
}

// write reviews
export function writeReviews(orderNum, params) {
  try {
    return $.post(`${HOST}/orders/${orderNum}/reviews`, params);
  } catch (error) {
    console.error(error);
  }
}

// get reviews
export function getReviewsDetail(orderNum) {
  try {
    return $.get(`${HOST}/orders/${orderNum}?include=items.review`, {});
  } catch (error) {
    console.error(error);
  }
}

// update user info
export function updateUserinfo(params) {
  try {
    return $.put(`${HOST}/user`, params);
  } catch (error) {
    console.error(error);
  }
}

// update user password
export function updatePassword(params) {
  try {
    return $.put(`${HOST}/user`, params);
  } catch (error) {
    console.error(error);
  }
}

// check code correct password
export function checkCode(params) {
  try {
    return $.post(`${HOST}/auth/code/checker`, params);
  } catch (error) {
    console.error(error);
  }
}

// reset user password
export function resetPassword(params) {
  try {
    return $.put(`${HOST}/auth/password`, params);
  } catch (error) {
    console.error(error);
  }
}

// update user email
export function updateEmail(params) {
  try {
    return $.put(`${HOST}/user`, params);
  } catch (error) {
    console.error(error);
  }
}

// store feedback
export function storeFeedback(params) {
  try {
    return $.post(`${HOST}/feedback`, params);
  } catch (error) {
    console.error(error);
  }
}
