// frontend/pages/AmericaGameDeals/AmericaGameDeals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData:{
      title:["Artbox", "Title", "Price", "salePrice", "LowestPrice", "Detail"],
      countentItem:[
      ],
    },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://switch-game-deals.herokuapp.com/games/eshop-sales',
      success:function(res){
        var listDataBuffer = res.data.data
        var listData = []
        listDataBuffer.forEach(element => {
          // var pushElem = { boxart : element.boxart, title:element.title, price: element.price,
          //   salePrice:element.salePrice, lowestPrice: element.lowestPrice, detail: element.url}
          var pushElem = [element.boxart,element.title,element.price,element.salePrice,element.salePrice,element.lowestPrice,element.url]
          listData.push(pushElem)
        });

        that.setData({
            tableData:{
            title:["Boxart", "Title", "Price", "salePrice", "LowestPrice", "Detail"],
            countentItem:listData,
          },
        })
        console.log(that.data.tableData.countentItem.length)
        console.log(that.data.tableData.title)
        console.log(that.data.tableData.countentItem[0])
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})