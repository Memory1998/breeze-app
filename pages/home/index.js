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
  onLoad(){
  },
  to(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/check/index',
    })
  }
})