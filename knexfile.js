const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

module.exports = {
  client: "pg",
  connection: {
    database: process.env.DB_NAME || "solopro",
    user: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "",
  },

  migrations: {
    tableName: "../db/migrations",
  },
  seeds: {
    directory: "../db/seeds",
  },
};
