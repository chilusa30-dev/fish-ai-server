import http from "http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/fish") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("🐟 Mensaje recibido:", body);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        success: true,
        reply: "Fish AI está viva 🐟🔥"
      }));
    });
  } else {
    res.writeHead(200);
    res.end("Fish AI Server OK");
  }
});

server.listen(PORT, () => {
  console.log("🐟 Fish AI Server ON en puerto", PORT);
});
