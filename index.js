// 🐟 Fish AI Secure Server (Railway)

// IMPORTS
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROOT (IMPORTANTE PARA RAILWAY)
app.get("/", (req, res) => {
  res.send("🐟 Fish AI Server ONLINE");
});

// ENDPOINT PRINCIPAL (ROBLOX LLAMA ACÁ)
app.post("/fish", (req, res) => {
  // Acá después va Cohere
  res.json({
    ok: true,
    message: "Fish AI endpoint activo"
  });
});

// PUERTO (CRÍTICO)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🐟 Fish AI escuchando en puerto", PORT);
});
