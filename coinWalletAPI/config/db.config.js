module.exports = {
/*    HOST: "127.0.0.1",
    PORT: "3321",
    USER: "root",
    PASSWORD: "root",
    DB: "CoinWalletApp",
    dialect: "mysql",
  */ 
  HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DATABASE,
    dialect: "mysql",


    
/*OPTIONAL*/
  /*  pool: {
	max: 5, (represents max number of connections in pool)
	min: 0, (min number of connections in pool)
	acquire: 30000, (max time in milliseconds that a connection can be inactive before being released)
	idle:10000 (max time in milliseconds that pool will try to get a connection before throwing error)
    }*/

};

