//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    moveimg:true,
    topimg:false,
    animation:"",
    animationData: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bb:function(){
    this.setData({
      moveimg:false,
      topimg:true
    })
  },
  cc:function(){
    this.setData({
      moveimg: true,
      topimg: false
    })
  },
  a:function(){
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(1.2, 1.2).step()
    animation.scale(1, 1).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function(){
      wx.reLaunch({
        url: '../answer/answer',
      })
    },200)

  //   setTimeout(function () {
  //     animation.translate(30).step()
  //     this.setData({
  //       animationData: animation.export()
  //     })
  //   }.bind(this), 1000)
  // },
  // rotateAndScale: function () {
  //   // 旋转同时放大
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  // },
  // rotateThenScale: function () {
  //   // 先旋转后放大
  //   this.animation.rotate(45).step()
  //   this.animation.scale(2, 2).step()
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  // },
  // rotateAndScaleThenTranslate: function () {
  //   // 先旋转同时放大，然后平移
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.animation.translate(100, 100).step({ duration: 1000 })
  //   this.setData({
  //     animationData: this.animation.export()
  //   })
  },
 
  onLoad: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: "linear",
    });
    this.animation = animation;

    animation.rotate(180).step();
    this.setData({
      animation: animation.export()
    })
    var n = 0;
    //连续动画需要添加定时器,所传参数每次+1就行
    setInterval(function () {
      // animation.translateY(-60).step()
      n = n + 1;
      this.animation.rotate(180 * (n)).step()
      this.setData({
        animation: this.animation.export()
      })
    }.bind(this), 1000)

    
    wx.playBackgroundAudio({
      dataUrl: '',
      title: '',
      coverImgUrl: ''
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
