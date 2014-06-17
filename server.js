var http 		= require('http'),
	express 	= require('express'),
	ecstatic 	= require('ecstatic'),
	app 		= express(),
	ip			= "127.0.01",
	port		= "8082";

app.use(ecstatic({ root: __dirname }));
http.createServer(app).listen(port);

console.log('Server running at http://127.0.0.1:' + port);