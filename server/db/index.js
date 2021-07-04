const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];
// console.log(config);
const db = require("knex")(config);
module.exports = db;