const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
