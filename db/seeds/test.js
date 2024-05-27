/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("record").del();
  await knex("record").insert([
    {
      id: 1,
      weight: 80,
      num_of_time: 5,
      event: "スクワット",
      part: "脚",
      date: "2024-05-11",
    },
    {
      id: 2,
      weight: 60,
      num_of_time: 10,
      event: "ベンチプレス",
      part: "胸",
      date: "2024-05-11",
    },
    {
      id: 3,
      weight: 20,
      num_of_time: 15,
      event: "アームカール",
      part: "腕",
      date: "2024-05-13",
    },
    {
      id: 4,
      weight: 20,
      num_of_time: 13,
      event: "ショルダープレス",
      part: "肩",
      date: "2024-05-13",
    },
    {
      id: 5,
      weight: 0,
      num_of_time: 15,
      event: "アブローラー",
      part: "腹筋",
      date: "2024-05-13",
    },
    {
      id: 6,
      weight: 60,
      num_of_time: 15,
      event: "ラッドプルダウン",
      part: "背中",
      date: "2024-05-14",
    },
  ]);
};
