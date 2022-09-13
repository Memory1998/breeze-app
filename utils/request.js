const config = require('../common/config.js');

/**
 * 封装request方法
 * 
 * @param {*} url 请求地址
 * @param {*} method 请求方法
 * @param {*} data 参数
 */
export default (url, method, data = {}, header) => {
  if (config.ignore_url.includes(url)) {
    let access_token = getApp().globalData.access_token
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
      url: config.base_url + url,
      data: data || {},
      method: method || 'GET',
      header: header,
      success: (res) => {
        // 正常请求
        if (res.statusCode == 401) {
          if (url !== '/admin/token') {
            // 重定向到登录授权页
            wx.redirectTo({
              url: '/pages/login/index'
            });
          }
          wx.showToast({
            title: '认证失败',
            icon: 'none',
            duration: 2000
          })
        } else if (res.statusCode == 200) {
          resolve(res);
        } else {
          // 请求异常
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 2000
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