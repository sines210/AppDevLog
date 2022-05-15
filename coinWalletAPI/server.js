var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var env = require('./env');
//var key = fs.readFileSync("/etc/apache2/ssl/ca_keys/debian2.key");
//var cert = fs.readFileSync("/etc/apache2/ssl/ca_keys/debian2.pem");

/*var options = {
    key: key,
    cert:cert,
    passphrase: env.setEnv.passphrase
};*/
var app = express();
var cors = require('cors');
var PORT = process.env.PORT || 5000;
var whitelist = ['ionic://localhost','http://localhost','http://localhost:8080','http://localhost:8100'];
var corsOptions = {origin: function (origin, callback) {
    if (whitelist.indexOf(origin)!==-1){
	callback(null, true)
    }
    else{
	callback(new Error('Not allowed by Cors'))
    }
}};
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var helmet = require('helmet');


app.use(cors(corsOptions));//voir les cors options au besoin
app.use(helmet());
app.use(express.json());
//app.use(express.urlencoded({ extended: true}));
/*app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());*/


const db = require("./models");
db.sequelize.sync();

/* 

    User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
    User.sync({ force: true }) - This creates the table, dropping it first if it already existed
    User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/

/*
app.get('/', (req, res)=>{
    
    res.json({
	message: 'Welcome to this new application project'
	})
})

*/

app.use('/', routes);
app.listen(PORT, ()=>{console.log('server works')})

//https.createServer(options, app).listen(PORT)
//http.createServer(app).listen(5000)

