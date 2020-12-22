//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
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
