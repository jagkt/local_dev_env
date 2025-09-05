const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from node_app");
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`Node service running on port ${PORT}`);
  });



