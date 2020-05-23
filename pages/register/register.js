// pages/register/register.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    oneshow:false,
    twoshow:true,
    isChecked:true,
    // 用户信息
    userName: '',
    busNumber: null,
    mobile: null,
    code: '',
    homeLocation:'',
    workLocation:'',
    commontime: '08:00',
    startime: '07:00',
    latestime: '08:00' 
  },
  inputData: function (e) {
    var value = e.detail.value
    this.setData({
       userName: value 
    })
  },
  numberInputData: function (e) {
    var value = e.detail.value
    this.setData({
       busNumber: value 
    })
  },
  mobileInputData: function (e) {
    var value = e.detail.value
    this.setData({
      mobile: value
    })
  },
  codeInputData: function (e) {
    var value = e.detail.value
    this.setData({
      code: value
    })
  },
  homeLocation: function (e) {
    wx.navigateTo({
      url: '/pages/selecHome/selecHome',
    })
  },
  workLocation: function (e) {
    var value = e.detail.value
    this.setData({
      workLocation: value
    })
  },
  CommonTimeChange(e) {
    this.setData({
      commontime: e.detail.value 
    })
  },
  StarTimeChange(e) {
    this.setData({
       startime: e.detail.value 
    })
  },
  LasTimeChange(e) {
    this.setData({
      latestime: e.detail.value
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  IsShow() {
    if (!this.data.userName) {
      wx.showModal({
        title: '错误',
        content: '真实姓名不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.busNumber) {
      wx.showModal({
        title: '错误',
        content: '车牌号不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.mobile) {
      wx.showModal({
        title: '错误',
        content: '手机号不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.code) {
      wx.showModal({
        title: '错误',
        content: '验证码不能为空',
        showCancel: false
      })
      return
    }
    this.setData({
      oneshow:true,
      twoshow:false,
      TabCur: 1
          })
  },
  isLoading(e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
  register:function(){
    if (!this.data.homeLocation) {
      wx.showModal({
        title: '错误',
        content: '家庭地址不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.workLocation) {
      wx.showModal({
        title: '错误',
        content: '工作地址不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.commontime) {
      wx.showModal({
        title: '错误',
        content: '平时时间不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.startime) {
      wx.showModal({
        title: '错误',
        content: '最早时间不能为空',
        showCancel: false
      })
      return
    }
    if (!this.data.latestime) {
      wx.showModal({
        title: '错误',
        content: '最晚不能为空',
        showCancel: false
      })
      return
    }
    wx.navigateTo({
      url: '/pages/userTrip/userTrip',
    })
  },
  back: function () {
    var len = getCurrentPages();
    app.isBack(len);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      TabCur: app.globalData.TabCur,
      oneshow: app.globalData.oneshow,
      twoshow: app.globalData.twoshow,
      homeLocation: app.globalData.userInfo.homeLocation,
      workLocation: app.globalData.userInfo.homeLocation

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