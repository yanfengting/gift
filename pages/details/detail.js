// pages/details/detail.js
Page({
  data: {
    id: '',
    gift: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    console.log(this.data.id);
    this.getGiftItem();
  },
  getGiftItem:function(){
    var self = this;
    console.log(self)
    var id = self.data.id;
    var url = 'http://localhost:3000/getGifts/' + id;
    wx.request({
      url,
      success: function (res) {
        console.log(res);
        self.setData({
          gift: res.data.gifts[0]
        })
        console.log(self.data.gift);
      }
    })
    
  }
})