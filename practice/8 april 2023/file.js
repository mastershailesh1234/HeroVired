var httpserver = require("http");
const { text } = require("stream/consumers");

var server = httpserver.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Lets finish the server call");
});
server.listen(7000);