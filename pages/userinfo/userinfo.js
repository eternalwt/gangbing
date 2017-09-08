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
  }
})