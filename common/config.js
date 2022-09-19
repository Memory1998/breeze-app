let profile = 'dev'

// 定义不需要token得接口
let ignoreUrl = ['login']

let BASE_URL = ''
if (profile === 'dev') {
  // 开发环境
  BASE_URL = 'http://192.168.2.157:9000'
} else {
  // 正式环境
  BASE_URL = 'https://2224wa2776.oicp.vip'
}
module.exports = {
  base_url: BASE_URL,
  ignore_url: ignoreUrl
}