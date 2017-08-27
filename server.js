var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if( parsedUrl.pathname == '/listings' && request.method == 'GET'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(listingData);
        response.end();
    }
  else{
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Bad gateway error');
        response.end();
    }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
   listingData = data;
   http.createServer(requestHandler).listen(8080);

});
