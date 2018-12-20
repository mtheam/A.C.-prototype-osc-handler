
// JavaScript Document -- ServerSide JS code 
//socket.io has 2 parts: serverside that mounts on the node.js http server AND the client library that loads on teh broswer side

//OSC is a realtime control sound communication protocol 

//here we're going to send and receive OSC messages using node socket.io websockets 
//listen for OSC messages and passes them to socket.io and vice-versa

var app = require('express')();
var http = require('http').Server(app); //this is just using the local server 
var io = require('socket.io')(http); //define your io or everything will break and you will hate yourself for hours

//will need io-redis and io-emitter to emit events to stuff outside of socket.io processes 


//app is a function handler that you can chuck to the HTTP server 
//"/" is the route handler that gets called when somebody hits the page 
//http server listens on port 3000
app.get('/', function(req, res){
  res.sendFile(__dirname + '/clientside_index.html');
});

io.on('connection', function(socket){
	console.log('page connect'); 
});
//io.sockets.on('connection', function (socket) {  //on connect, get the IP address of incoming transmission
// var address = socket.handshake.address;
//  console.log('New connection from ' + address.address + ':' + address.port);
//});
		
http.listen(3000, function(){
	console.log('listening on *:3000');
}); 
	//so far, we call res.senx and pass an html string
	
	//starts a server listening for connections 
	//server.listen([port[, host[, backlog]]][, callback]) for TCP servers