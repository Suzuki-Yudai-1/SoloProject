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
      event: "squat",
      part: "leg",
      date: "2024-05-14",
    },
    {
      id: 2,
      weight: 60,
      num_of_time: 10,
      event: "bench press",
      part: "chest",
      date: "2024-05-11",
    },
    {
      id: 3,
      weight: 20,
      num_of_time: 15,
      event: "arm curl",
      part: "arm",
      date: "2024-04-14",
    },
  ]);
};
