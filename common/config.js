let profile = 'dev'


// 定义不需要token得接口
let ignoreUrl = ['login']

let BASE_URL = ''
if (profile === 'dev') {
    BASE_URL = 'https://2224wa2776.oicp.vip' // 开发环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
module.exports = {
  base_url: BASE_URL,
  ignore_url: ignoreUrl
}
