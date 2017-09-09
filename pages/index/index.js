//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    priceLst:[],
    motto: '点击图片购买',
    userInfo: {},
    total: 0,

    carts: [
      { cid: 0, title: 'Zippo打火机', image: 'https://img12.360buyimg.com/n7/jfs/t2584/348/1423193442/572601/ae464607/573d5eb3N45589898.jpg', num: '1', price: '198.0', sum: '198.0', selected: true },
      { cid: 1, title: 'iPhone7 Plus', image: 'https://img13.360buyimg.com/n7/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg', num: '1', price: '7188.0', sum: '7188.0', selected: true },
      { cid: 2, title: '得力订书机', image: 'https://img10.360buyimg.com/n7/jfs/t2005/172/380624319/93846/b51b5345/5604bc5eN956aa615.jpg', num: '3', price: '15.0', sum: '45.0', selected: false },
      { cid: 3, title: '康师傅妙芙蛋糕', image: 'https://img14.360buyimg.com/n7/jfs/t2614/323/914471624/300618/d60b89b6/572af106Nea021684.jpg', num: '2', price: '15.2', sum: '30.4', selected: false },
      { cid: 4, title: '英雄钢笔', image: 'https://img10.360buyimg.com/n7/jfs/t1636/60/1264801432/53355/bb6a3fd1/55c180ddNbe50ad4a.jpg', num: '1', price: '122.0', sum: '122.0', selected: true },
    ]
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
  
  countMinus: function () {
    if (app.globalData.count[0] > 0) {
      app.globalData.count[0]--;

      var that = this
      that.setData({
        productCount: app.globalData.count[0]
      })
    }
  },

  countAdd: function (event) {
    event.stopPropagation;
    app.globalData.count[0]++;

    var that = this
    that.setData({
      productCount: app.globalData.count[0]
    })
  },

  goCharge: function () {
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    
    that.setData({
      priceLst: app.globalData.price,
    })
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onShow: function () {
    console.log("showed!");
    var that = this
    that.setData({
      total: app.globalData.totalPrice,
      countLst: app.globalData.count
    })
  }

})
