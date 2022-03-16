const { GopherServer, StaticRouter } = require("gopher-server");
const path = require('path');
require('dotenv').config()

let server = new GopherServer();

if (!process.env.PUBLIC) {
    console.log('Public folder missing. Edit .env or set environment variable PUBLIC to path of Gopher content.');
    process.exit(1);
}

server.use(new StaticRouter(process.env.PUBLIC));


// Log all requests to the server
server.on("request", (request) => {
	console.log(`${request.socket.remoteAddress} requested ${request.path}`);
});

server.listen(70, () => {
    console.log(`Gopher server is now running at gopher://localhost:70 serving files from ${ process.env.PUBLIC }`)
});
