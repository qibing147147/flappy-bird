export class ApiExamples {
  getUserInfo() {
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  }
  login() {
    wx.login({
      success: function(res) {
        console.log(res)
      }
    })
  }
  getSettings() {
    wx.getSetting({
      success: function(res) {
        console.log(res)
      }
    })
  }
  httpExample() {
    wx.request({
      url: 'http://127.0.0.1:8181',
      method: 'POST',
      data: 'myData',
      success: function(res) {
        console.log(res)
      }
    })
  }
  socketExample() {
    wx.connectSocket({
      url: 'ws://127.0.0.1:8282',
      success: function() {
        console.log('连接成功')
      }
    })
    wx.onSocketOpen(function() {
      wx.sendSocketMessage({
        data: '这个是来自客户端的实时消息'
      })
      wx.onSocketMessage(function(message) {
        console.log(message)
      })
    })
  }
  
  download() {
    wx.downloadFile({
      url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=554690849,674480205&fm=173&app=49&f=JPEG?w=218&h=146&s=3E02954F12038D114D3B21F80300501A',
      success: function(temp) {
        console.log(JSON.stringify(temp))
      }
    })
  }
}