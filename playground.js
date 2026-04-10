const http = require("http");
const EventEmitter = require("events");

const emitter = new EventEmitter();


// 🔥 Event listeners
emitter.on("greet", (name) => {
  console.log(`Greeting sent to ${name}`);
});

emitter.on("orderPlaced", (item) => {
  console.log(`Order received for ${item}`);
});

emitter.on("orderPlaced", (item) => {
  console.log(`Preparing ${item}`);
});


// 🚀 Server
const server = http.createServer((req, res) => {

  const myUrl = new URL(req.url, "http://localhost:3000");

  const path = myUrl.pathname;
  const name = myUrl.searchParams.get("name");

  if (path === "/") {
    res.end("Home Page");

  } 
  
  else if (path === "/user") {

    if (name) {
      emitter.emit("greet", name);   // 🔥 EVENT USED HERE
      res.end(`Hello ${name}`);
    } else {
      res.end("Please provide a name in query");
    }

  } 
  
  else if (path === "/order") {

    const item = myUrl.searchParams.get("item");

    if (item) {
      emitter.emit("orderPlaced", item); // 🔥 EVENT USED HERE
      res.end(`Order placed for ${item}`);
    } else {
      res.end("Please provide item");
    }

  } 
  
  else {
    res.end("404 Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});