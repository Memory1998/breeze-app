import request from '../../utils/request'
Page({
  data: {
    username: "admin",
    password: '123456',
    showornot: 'password',
    show: true,
  },
  showPassword() {
    debugger
    this.submit()
    //   this.setData({
    //     show: !this.data.show
    //   })
    //   if (this.data.show === true) {
    //     this.setData({
    //       showornot: 'password'
    //     })
    //   } else {
    //     this.setData({
    //       showornot: 'text',
    //       password: this.data.password
    //     });
    //   }
  },
  async submit() {
    var data = {
      username: this.data.username,
      password: this.data.password
    };
    let login = await request("/admin/token", "POST", data)
    console.log(login)
    this.toHome();
  },
  toHome() {
    wx.reLaunch({
      url: '/pages/home/index',
    })
  }
})