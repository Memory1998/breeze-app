import Dialog from '@vant/weapp/dialog/dialog';

Page({
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  /**
  * 页面的初始数据
  */
  data: {
    msgList: [
      {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }, {
        id: 1,
        title: '你好',
        value: '1'
      }
    ]
  },

  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close();
        });
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})