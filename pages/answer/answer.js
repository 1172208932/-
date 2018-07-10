// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alreadyid:1,
    answerAll:[0,0,0,0],
    clickIndex:"",
    answerData:"出远门回家的时候通常有人接送吗？",
    listData: ["轻快的脱点蕾丝裙子", "轻快的脱点蕾丝裙子", "轻快的脱点蕾丝裙子", "轻快的脱点蕾丝裙子"]
  },
  answerClick:function(e){
    if (this.data.alreadyid==6){
      wx.reLaunch({
        url: '../result_1/result_1',
      })
    }
    var a = e.currentTarget.dataset.click
    var ve = this.data.answerAll[a]  
    this.data.alreadyid += 1
    this.data.answerAll.splice(a, 1, ve+1)
    this.setData({
      clickIndex:a,
      })
    console.log(this.data.alreadyid)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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