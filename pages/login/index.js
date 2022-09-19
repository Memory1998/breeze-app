import request from '../../utils/request'

Page({
  data: {
    username: "admin",
    password: '123456',
    showPassword: true,
    show: true,
  },
  showPassword() {
    this.setData({
      show: !this.data.show
    })
    if (this.data.show === true) {
      this.setData({
        showPassword: true
      })
    } else {
      this.setData({
        showPassword: false,
        password: this.data.password
      });
    }
  },
  async submit() {
    var data = {
      username: this.data.username,
      password: this.data.password
    };
    let resp = await request("/token", "POST", data)
    if (resp.code === 1) {
      this.toHome()
      return
    }
  },
  toHome() {
    wx.reLaunch({
      url: '/pages/home/index',
    })
  }
})