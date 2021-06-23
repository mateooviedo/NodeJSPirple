/*
 * Primary file for the node API
 *
 */

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all request with a string
const server = http.createServer((req, res) => {
	// Get the URL and parse it
	const parseUrl = url.parse(req.url, true);

	// Get the path
	const path = parseUrl.pathname;
	const trimedPath = path.replace(/\/+|\/+$/g, '');

	// Get the HTTP method
	const method = req.method.toLowerCase();
	
	// Send the response
	res.end('Hello World\n');

	// Log the request path
	console.log(`Request received on path: ${trimedPath} whit this method ${method}`);

});


// Start the server, and here it listen on port 3000
server.listen(3000, () => {
	console.log('The server is listening on port 3000 now');
});
