var app = getApp()
Page({
  data: {
    name:'hulk',
    address:'dingziqiao',
    phone:'15807198049',
    message:'add more sugar',
    total:0
  },

  onLoad: function (options) {
    console.log('onLoad')

    var that = this
    that.setData({
      total: app.globalData.totalPrice
      //total: sum
    })
    //获取姓名、地址、手机号等默认值
    //首先尝试从缓存中调用
    // that.setData({
    //   name: ,
    //   address:,
    //   phone:,
    //   message:
    // })
  },

  pay: function(){
    wx.requestPayment(
      {
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': '',
        'success': function (res) {
          console.log("pay succeeded!");
         },
        'fail': function (res) { 
          console.log("pay failed!");
        },
        'complete': function (res) { }
      }) 
;
  }
})