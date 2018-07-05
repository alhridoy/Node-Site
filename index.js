var fs = require('fs');
var http = require('http');
// readStream.on('data', function(chunk){

//     console.log("Creating");

//     myShort.write(chunk)
// })// only pipe() will do
// readStream.pipe(myShort);

var server = http.createServer(function(req,res){

    console.log("url" + req.url);
    if(req.url==='/' || req.url ==='/index'){
        res.writeHead(200,{"content-type":'text/html; charset=utf-8'});
        var readStream = fs.createReadStream(__dirname +'/index.html','utf-8');
        readStream.pipe(res);
    } else if(req.url==='/about'){
        res.writeHead(200,{"content-type":'text/html; charset=utf-8'});
        var readStream = fs.createReadStream(__dirname +'/about.html','utf-8');
        readStream.pipe(res);

    }   else if (req.url === '/news/best/articles') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/news-best.html').pipe(res);
      } else{

        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
      }
    
   


})

server.listen(3000, '127.0.0.1');