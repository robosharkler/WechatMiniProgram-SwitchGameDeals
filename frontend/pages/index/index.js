//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './Flag_of_the_United_States.svg',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  getUSGameDeals: function(e) {
    wx.navigateTo({
      url: '../AmericaGameDeals/AmericaGameDeals',
    })
  },
})
