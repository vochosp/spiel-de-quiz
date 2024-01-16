const http = require('http');
const fs = require('fs');


// Create a server object
http.createServer(function (req, res) {
	
	// http header 
	const url = req.url;

	if(url ==='/about') {
		//about lulw, kdo píše jak master tak sem může něco napsat :D
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(' Welcome to about us page'); 
		res.end(); 
	}
	else if(url ==='/quiz') {
		//QUIZ
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(' Welcome to quiz select page'); 
		res.end();
	}
    else if(url === '/style.css') {
        //CSS connect
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(fs.readFileSync('style.css').toString());
        res.end()
    }
	else if(url === '/favicon.ico') {
        //Favicon ico
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(fs.readFileSync('favicon.ico'));
        res.end()
    }
	else {
		//HOMEPAGE
        res.writeHead(200, {'Content-Type': 'text/html'});

		//Script na GET. data ulozena v promenne prozatim v plain textu bez parsu
		if (url.split("?").length > 1){
			getdata = req.url.split("?");
			console.log(getdata);
		};

		

        res.write(fs.readFileSync('index.html').toString()); 
		res.end(); 
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port http://127.0.0.1:3000/");
});


