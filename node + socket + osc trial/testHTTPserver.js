//this ONLY creates an http server that listens on port 8000

var http = require('http'); 

http.createServer(function(request, response){
	
	//response HTTP content 
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	//send back hello world 
	response.end('Hello World\n');
	
}).listen(8000);

console.log('test http server running at 8000');