const http = require("node:http");
const fs = require("node:fs");

const indexHtml = fs.readFileSync("./index.html", "utf-8");
const aboutHtml = fs.readFileSync("./about.html", "utf-8");
const experienceHtml = fs.readFileSync("./experience.html", "utf-8");
const educationHtml = fs.readFileSync("./education.html", "utf-8");
const contactHtml = fs.readFileSync("./contact.html", "utf-8");
const notFoundHtml = fs.readFileSync("./404.html", "utf-8");

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexHtml);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(aboutHtml);
    res.end();
  } else if (url === "/experience") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(experienceHtml);
    res.end();
  } else if (url === "/education") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(educationHtml);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(contactHtml);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(notFoundHtml);
    res.end();
  }
});

const port = 8888;
server.listen(port, function () {
  console.log("Server is running on port " + port);
});
