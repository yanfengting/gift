//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pictures: [],
    Gifts: [],
    page: 1,
    hasMoreData: true,
  },
  onLoad: function () {
    this.getSwipers();
    this.getGifts();
  },
  getSwipers: function () {
    var url = 'http://localhost:3000/getSwipers';
    var self = this;
    wx.request({
      url,
      success: function (res) {
        console.log(res)
        self.setData({
          pictures: res.data.swipers
        })
        console.log(self.data.pictures)
      }
    })
  },
  getGifts: function () {
    var url = 'http://localhost:3000/getGifts';
    var self = this;
    wx.request({
      url,
      success: function (res) {
        console.log(res)
        self.setData({
          gifts: res.data.gifts
        })
        console.log(self.data.gifts)
      }
    })
  },
  showInfo: function () {
    wx.navigateTo({
      url: "../details/detail?id={{item._id}}"
    })
  },
  showModal: function () {
    wx.showModal({
      title: '您好',
      content: '需要定制请拨打电话：15521343151联系我们',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    // this.init();//初始化页面的接口请求
    // wx.stopPullDownRefresh();//关闭下拉刷新
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },


  // 滚动到底部，往列表里加一页数据
  // onReachBottom: function () {
  //   if (this.data.hasMoreData) {
  //     this.getGifts();
  //     wx.showLoading({
  //       title: '加载更多数据'
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '没有更多数据'
  //     })
  //   }
  // },

})
