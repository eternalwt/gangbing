//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    productId: 0,
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
  onLoad: function (options) {
    console.log('onLoad_')
    var that = this
    that.setData({
      productId:options.id
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
