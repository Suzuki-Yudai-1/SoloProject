/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("record", function (t) {
    t.increments("id").primary();
    t.integer("weight");
    t.integer("num_of_time");
    t.string("event");
    t.string("part");
    t.date("date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("record");
};
