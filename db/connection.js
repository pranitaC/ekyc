var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/ekyc');
module.exports = sequelize;
