const Sequelize = require('sequelize');
const PeslaRes = require('./pesla_result');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.PeslaRes = PeslaRes;

PeslaRes.init(sequelize);

module.exports = db;