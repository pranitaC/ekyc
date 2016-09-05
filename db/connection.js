var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:27017/ekyc');
module.exports = sequelize;
