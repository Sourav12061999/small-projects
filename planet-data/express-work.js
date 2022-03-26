const express = require("express");
const app = express();
const path = require("path");

app.use("/site", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "codebash2.png"));
});
app.listen(8080, () => {
  console.log("Server started");
});
