const Sequelize = require("sequelize");

const PG_URL = "postgres://pqpfnhai:mB2nbDXBnaeR6MFFmZox01AN5tRQmMfZ@fanny.db.elephantsql.com/pqpfnhai";

const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Employees = require("./employees.js")(sequelize, Sequelize);

module.exports = db;