const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello, API!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
