//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    productId: 0,
    productCount: 0,
    imagePath: "",
    motto: '点击图片购买',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('buy clicked!')
    wx.navigateTo({
      url: '../userinfo/userinfo'
    })
  },
  countMinus: function() {
    var id = this.data.productId;
    if (app.globalData.count[id] > 0)
    {
      app.globalData.count[id]--;
      app.globalData.totalPrice -= app.globalData.price[id];

      var that = this
      that.setData({
        productCount: app.globalData.count[id]
      })
    }
  },
  countAdd: function () {
    var id = this.data.productId;

    app.globalData.count[id]++;
    app.globalData.totalPrice += app.globalData.price[id];

    var that = this
    that.setData({
      productCount: app.globalData.count[id]
    })
  },

  onLoad: function (options) {
    console.log('onLoad_')
    var that = this
    that.setData({
      productId:options.id,
      productCount: app.globalData.count[options.id],
      imagePath: "../images/" + options.id.toString() + ".png"
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
