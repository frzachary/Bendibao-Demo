// Pages/home/home.js
Page({


  data: {
    imgUrls: [
      '/assets/images/banner-01.png',
      '/assets/images/banner-02.png'
    ],

    boards:[],
    inlet: [
      '/assets/images/link-01.png',
      '/assets/images/link-02.png'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
wx.request({
  url: 'https://locally.uieee.com/categories',
  data: '',
  header: {},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: (res) => {
    // console.log(res);
    /**
     *   this.setData 有两个功能：
     *      1. 更新数据
     *      2. 更新视图
     * */
    this.setData({
      boards: res.data
    });
  },
  fail: function(res) {},
  complete: function(res) {},
})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})