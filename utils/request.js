// 定义不需要token得接口
export var ignoreUrl = ['login']

export var BASE_URL = 'https://2224wa2776.oicp.vip'

/**
 * 封装request方法
 * 
 * @param {*} url 请求地址
 * @param {*} method 请求方法
 * @param {*} data 参数
 */
export default (url, method, data = {}, header) => {
  // 全局获取 JWT Token
  let access_token = getApp().globalData.access_token
  if (ignoreUrl.includes(url)) {
    header = {
      'Authorization': 'Bearer ' + access_token
    }
  }
  header = {
    ...header,
    'content-type': 'application/json'
  }
  return new Promise((resolve, reject) => {
    // 开始请求
    wx.request({
      url: BASE_URL + url,
      data: data || {},
      method: method || 'GET',
      header: header,
      success: (res) => {
        // 正常请求
        if (res.statusCode == 401) {
          wx.showToast({
            title: '认证失败',
            icon: 'loading',
            duration: 1000
          })
          // 重定向到登录授权页
          wx.redirectTo({
            url: '/pages/login/index'
          });
        } else if (res.statusCode == 200) {
          resolve(res);
        } else {
          // 请求异常
          wx.showToast({
            title: '请求失败',
            icon: 'loading',
            duration: 1000
          })
          reject(res.data);
        }
      },
      /**
       * 请求失败
       */
      fail: (e) => {
        wx.hideLoading()
        wx.showToast({
          title: '无法链接',
          icon: 'loading',
          duration: 1000
        })
        reject('无法链接');
      }
    })
  });
}