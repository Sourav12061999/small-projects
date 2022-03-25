const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  if (req.url === "/hello") {
    res.write("Hello World");
  } else {
    res.write("Don't know this url");
  }
  res.end();
});

server.listen(80, () => {
  console.log("Server started");
});
