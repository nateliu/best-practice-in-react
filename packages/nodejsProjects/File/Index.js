/*ʵ��һ����̬�ļ�������,�����վ����Ŀ¼���ҵ�������ʾ���ݣ��Ҳ�������ʾ
404�ļ�û���ҵ�����Ϣ�Ϳ����ˡ�
Ҫ�õ���ģ�飺
http,fs,url,path
http��������web��������fs������ȡ�ļ���url������ȡweb·������path�������
����ȡ�ļ�����·������ؼ�����.
�Զ����һ��MIMEģ��
*/
var mime = require("./Mime");
var http = require("http"),fs = require("fs"), url = require("url"), path = require("path");
http.createServer(function (request, response) {
    var webpath = url.parse(request.url).pathname;
    var abspath = __dirname + webpath;
    path.exists(abspath, function (exist) {
        if (exist) {
            //ʹ�ö����ƶ�ȡ�ļ������Ҳ���ö�����д���ݡ���response.write(xxx,"binanry");
            fs.readFile(abspath, "binary", function (err, data) {
                if (err) {
                    throw err;
                }

                //��ȡ�ļ��ĺ�׺��
                var ext = path.extname(webpath);
                ext = ext ? ext.slice(1) : "unknown";
                console.log(ext);

                //�����ļ��ĺ�׺���õ���Ӧ��MIME
                var contentType = mime.mimes[ext];
                console.log(contentType);

                response.writeHead(200, { 'Content-Type': contentType });
                response.write(data, "binary");
                response.end();
            });
        }
        else {
            response.end("404,file not found.");
        }
    });

}).listen(9000);
console.log("file server start in port 9000");