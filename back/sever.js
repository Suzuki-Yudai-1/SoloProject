const express = require("express");
const app = express();
const PORT = 8080;

app.use("/", express)




app.listen(PORT, () => {
  console.log(`I am now waiting for incoming HTTP traffic on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.send("conecting sever !!");
});
