module.exports = {
   /* HOST: "127.0.0.1",
    PORT: "3321",
    USER: "root",
    PASSWORD: "root",
    DB: "CoinWalletApp",
    dialect: "mysql",
   */
    HOST: "eu-cdbr-west-02.cleardb.net",
    USER: "b0be6cfb8ee185",
    PASSWORD: "c1caa80b",
    DB: "heroku_d40bec29e594d0f",
    dialect: "mysql",

//process.env.USER_ID; // "239482"
    
/*OPTIONAL*/
  /*  pool: {
	max: 5, (represents max number of connections in pool)
	min: 0, (min number of connections in pool)
	acquire: 30000, (max time in milliseconds that a connection can be inactive before being released)
	idle:10000 (max time in milliseconds that pool will try to get a connection before throwing error)
    }*/

};

