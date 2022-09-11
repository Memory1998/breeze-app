Page({
  data: {
    swiper: [{
      img: ""
    }, {
      img: ""
    }, {
      img: ""
    }]
  },
  to(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/check/index',
    })
  }
})