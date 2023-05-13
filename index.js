const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express");
});

app.get("/api/listing", (req, res) => {
  res.send([
    { id: 1, roomType: "Duplex" },
    { id: 2, roomType: "Flat" },
  ]);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
