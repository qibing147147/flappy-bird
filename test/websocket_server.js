const WebSocketServer = require('ws').Server
const ws = new WebSocketServer({
  port: 8282
})
ws.on('connection', function(ws) {
  console.log('客户端已经连接啦！')
  ws.on('message', function(message) {
    console.log(message)
  })
})