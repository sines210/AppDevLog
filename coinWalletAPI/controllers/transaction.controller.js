const db = require("../models");
const Transaction = db.transaction;
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
var env = require('../env');


exports.createJournal = (req, res)=>{
    if(!req.body){
	res.status(400).send({
	    message: "Content can not be empty!"
	});
	return
    }
    else{
	var token = req.body.walletId;
	var decoded = jwt.verify(token, env.setEnv.secret);
	Transaction.create({flux:req.body.flux,
			    transaction_amount:req.body.transaction_amount,
			    currency:req.body.currency,
			    crypto_currency:req.body.crypto,
			    transactions_wallet_id:decoded.walletId,
			    crypto_amount:req.body.crypto_amount})
	    .then((data)=>{
		res.status(201).send({message: "Transaction saved in the journal"})
	    })
	    .catch(err=>{
		res.status(500).send({
		    message: err.message || "Some error occured while creating"
		})
	    })
	
    }
};
