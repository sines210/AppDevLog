const dbConfig = require("../config/db.config.js");
const {Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    logging: console.log,
    /*OPTIONAL
      pool:{
        max: dbConfig.pool.max,
	min: dbConfig.pool.min,
	acquire: dbConfig.pool.acquire,
	idle: dbConfig.pool.idle
	}*/
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;
db.Op = Op;
db.identification = require("./identification.js")(sequelize, Sequelize, DataTypes, Op);
db.wallet = require("./wallet.js")(sequelize, Sequelize, DataTypes, Op);
db.transaction = require("./transaction.js")(sequelize, Sequelize, DataTypes, Op);
module.exports = db;











