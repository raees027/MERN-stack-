const http = require("http");
const fs = require("fs");

const userList = [{ name: "jhon" }, { name: "hari" }];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5174");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  switch (req.url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      });

      break;

    case "/users":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(userList));
      break;

    case "/users-post":
      if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
      }
      if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          const newUser = JSON.parse(body);
          userList.push(newUser);

          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify({ users: userList }));
        });
      }

      break;

    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
      break;
  }
});

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`seerver started running in ${PORT} `);
});
