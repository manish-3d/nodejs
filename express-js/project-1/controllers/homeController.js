// controllers/homeController.js

function getHome(req, res) {
  res.send("Hello, world!");
}

module.exports = { getHome };