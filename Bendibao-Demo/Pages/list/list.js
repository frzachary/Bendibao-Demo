// Pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    // 由于第一次加载的时候就要自增1，所以默认值设置为0
    pageIndex: 0, //页面索引
    pageSize: 20, //20条信息
    catId: 1,
    //用于记录是否还有更多数据
    hasMore: true
  },
  //自定义函数用于加载（更多）数据
  loadMore: function() {
    //如果没有更多数据，则直接返回
    if (!this.data.hasMore) return;
    //请求API数据
    wx.request({
      //用于请求商铺数据，其中 this.data.catId 用来定向指向API地址
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',

      data: {
        //
        _limit: this.data.pageSize,
        _page: ++this.data.pageIndex
      },
    
      //当数据请求成功时，执行
      success: (res) => {
        console.log(res);
        //先获取本来的数据，在用concat拼接前后数据.
        var newList = this.data.shopList.concat(res.data);
        //获得数据总数
        var count = parseInt(res.header['X-Total-Count']);
        //用来判断是否还有更多的数据
        var flag = this.data.pageIndex * this.data.pageSize < count;
        this.setData({
          shopList: newList,
          hasMore: flag,
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    });
  },

  onLoad: function(options) {
    console.log(options);
    // 1.1. 根据首页传递过来的参数，设置导航条标题
    // 更多API学习方式：看文档。
    if (options.title) {
      wx.setNavigationBarTitle({
        title: options.title,
      });
    } 
    // 1.2. 把获取的参数设置到data中，方便复用
    this.setData({
      catId: options.cat
    });
    // 1.4. 调用加载数据的函数
    this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
    //下拉刷新，把数据设置为默认值
    this.setData({
      shopList: [],
      pageIndex: 0,
      hasMore: true,
    });
    //在重新请求数据
    this.loadMore();
    //重点！！！
    //记录停止，否则手机端页面将一直存在
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    //页面触底时，触发加载函数，再次加载数据
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})