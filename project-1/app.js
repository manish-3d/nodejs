const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, "http://localhost:3000");

  if (myUrl.pathname === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });

  } else if (myUrl.pathname === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });

  } else if (myUrl.pathname === "/contact-me.html") {
    fs.readFile("contact-me.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });

  } else {
    fs.readFile("404.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" }); // better 404 here
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});