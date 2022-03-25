const http = require("http");

let arr = [];
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  if (req.url === "/hello") {
    res.write("Hello World");
  } else if (req.url === "/post" && req.method === "POST") {
    req.on("data", (data) => {
      const postData = data.toString();
      console.log(postData);
      arr.push(postData);
    });
  } else {
    res.write("Don't know this url");
  }
  res.end();
});

server.listen(80, () => {
  console.log("Server started");
});
