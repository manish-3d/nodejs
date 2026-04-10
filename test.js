const http = require("http");

const fs = require("fs");
const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

console.log("Next line");
const server = http.createServer((req, res) => {
  res.end("Hello from nodejs");
  res.end(data);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.writeFile("file.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File written");
});
fs.appendFile("file.txt", "\nNew Line", (err) => {
  if (err) throw err;
});
fs.unlink("file.txt", (err) => {
  if (err) throw err;
});
console.log(data);
