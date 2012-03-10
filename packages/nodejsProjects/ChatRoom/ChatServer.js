/*
����������Ҫʹ��һ����socket.io��ģ�飬���ģ�飬���ǿ������߰�װ��������
npm install socket.io
��Щ�ط�����˵Ҫ����-d,��������ʱ��ȷʵû�мӣ�Ҳ�ɹ��ˣ�ֻ�ǲ�֪�����
-d�����Ǻ����á��Ȳ����ˣ����Ժ��˽�����ȻҲ��֪���ˡ�
����һ����������������ȵ�Ȼ�ǽ���һ����������Ȼ������������������OK�ˡ�
ע�������������������һ�ν����Ǹ���̬�ļ���������ʹ�õ�fsһ�������������
����html���������ļ����ڵĻ�����ȡ����������������У��ﵽ�����Ĺ�Ч��
*/
var http = require("http"),socketio = require("socket.io"),fs=require("fs");
var chatserver = http.createServer(function (request, response) {
    fs.readFile(__dirname +"/ChatClient.html",	function (err, data) {
        response.writeHead(200);
        response.end(data);
	});
}).listen(9000);
console.log("chat server start at port 9000");
var websocket = socketio.listen(chatserver);
websocket.sockets.on("connection", function (socket) {
    console.log("websocket connect ok.");
    socket.on("msg", function (data) {
        console.log("Get a msg from client ...");
        console.log(data);
        socket.broadcast.emit("user message", data);
    });
});
