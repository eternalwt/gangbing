//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    priceLst:[],
    motto: '点击图片购买',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap1: function() {
    console.log("bingTap");
    wx.navigateTo({
      url: '../product/product?id=0'
    })
  },
  tap2: function () {
    console.log("bingTap");
    wx.navigateTo({
      url: '../product/product?id=1'
    })
  },
  tap3: function () {
    console.log("bingTap");
    wx.navigateTo({
      url: '../product/product?id=2'
    })
  },
  tap4: function () {
    console.log("bingTap");
    wx.navigateTo({
      url: '../product/product?id=3'
    })
  },
  tap5: function () {
    console.log("bingTap");
    wx.navigateTo({
      url: '../product/product?id=4'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    
    that.setData({
      priceLst: app.globalData.price
    })
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
