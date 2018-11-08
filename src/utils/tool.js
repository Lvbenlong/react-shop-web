export function calcPrice(money) {
  return `$ ${(money/100).toFixed(2)}`
}

export function generateUuid () {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

// 处理location search ： ?taxon_slug=jiao-cai&taxon_name=%E6%95%99%E6%9D%90
export function sortURLToObj(url) {
  let obj = {}
  url.substring(1).split('&').map((item) => {
    let val = item.split('=')
    obj[val[0]] = val[1]
  })
  return obj
}