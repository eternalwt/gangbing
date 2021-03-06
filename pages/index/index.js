//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    products: [
      { cid: 0, name: "产品1", image: '../images/0.png', price: app.globalData.price[0], count: app.globalData.count[0] },
      { cid: 1, name: "产品2", image: '../images/1.png', price: app.globalData.price[1], count: app.globalData.count[1] },
      { cid: 2, name: "产品3", image: '../images/2.png', price: app.globalData.price[2], count: app.globalData.count[2] },
      { cid: 3, name: "产品4", image: '../images/3.png', price: app.globalData.price[3], count: app.globalData.count[3] },
      { cid: 4, name: "产品5", image: '../images/4.png', price: app.globalData.price[4], count: app.globalData.count[4] },
    ],

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
  tap: function(event) {
    console.log(event);
    wx.navigateTo({
      url: '../product/product?id=' + event.currentTarget.id
    })
  },

  countMinus: function (event) {
    var id = event.currentTarget.id;
    if (app.globalData.count[id] > 0) {
      app.globalData.count[id]--;
      this.data.products[id].count--;
      
      var that = this
      that.setData({
        products: this.data.products
      })
    }
  },

  countAdd: function (event) {
    var id = event.currentTarget.id;
    app.globalData.count[id]++;
    this.data.products[id].count++;

    var that = this
    that.setData({
      products: this.data.products
    })
  },

  goCharge: function () {
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },

  onLoad: function () {
    var that = this
    that.setData({
    })
  },

  onShow: function () {
    var that = this

    for (var i = 0; i < app.globalData.count.length; i++) {
      this.data.products[i].count = app.globalData.count[i];
    }

    that.setData({
      products: this.data.products
    })
  },

  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '17707149611', //此号码并非真实电话号码，仅用于测试
      success: function () {
        //add stat log
      },
      fail: function () {
        //add app log
      }
    })
  }

})
