const express = require("express");
const app = express();
const database = require("./knex");

const list = [
  "翻訳アプリをダウンロードする",
  "戸締りをする",
  "猫を抱きしめる",
  "荷造りをする",
  " 航空券を買う",
  "もう一度猫を抱きしめる",
];

app.use("/", express.static(__dirname + "/react/dist"));

app.use("/", express.json());

app.get("/api/record", (req, res) => {
  database("record")
    .select()
    .orderBy("id", "desc")
    .then((result) => res.json(result));
});

app.post("/api/record", (req, res) => {
  const body = req.body;
  console.log(body);
  database("record")
    .insert({
      weight: Number(body.weight),
      num_of_time: Number(body.num_of_time),
      event: body.event,
      part: body.part,
      date: body.date,
    })
    .then((res) => {});
});

app.post("/api/id", (req, res) => {
  const body = req.body;
  console.log(body);
  database("record")
    .where("id", body.id)
    .del()
    .then((res) => {});
});

app.listen(3000, () => {
  console.log("server is running 3000");
});
