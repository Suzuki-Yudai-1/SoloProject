// Update with your config settings.
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME || "solopro",
      user: process.env.DB_USERNAME || "user",
      password: process.env.DB_PASSWORD || "",
    },
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./back/seeds",
  },
};
