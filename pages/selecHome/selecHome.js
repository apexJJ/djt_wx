//获取应用实例
const app = getApp()

var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];

Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    show: false,
    ideaShow: true,
    controls: [],
    nowlocation: ''
  },
  backRegister(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  order() {
    wx.navigateTo({
      url: '/pages/userTrip/userTrip',
    })
  },
  back: function () {
    var len = getCurrentPages();
    app.isBack(len);
  },
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'iqCHnRBtyuMDEHlGHx6qNpreiyUvy30i'
    });

    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log(data)
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
      that.setData({
        nowlocation: wxMarkerData[0].address
      });
      app.globalData.userInfo = {
        homeLocation: wxMarkerData[0].address
      }
      app.globalData.oneshow=true
      app.globalData.twoshow = false
      app.globalData.TabCur=1
    }
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '../../img/marker_red.png',
      iconTapPath: '../../img/marker_red.png'
    });
  }
  // onReady: function () {
  //   var that = this
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success(res) {
  //       const latitude = res.latitude
  //       const longitude = res.longitude
  //       console.log("lat:" + latitude + ",lon:" + longitude)
  //     }
  //   })
  // }

})