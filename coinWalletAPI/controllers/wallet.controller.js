const db = require("../models");
const Wallet = db.wallet;
const Op = db.Sequelize.Op;
var jwt = require('jsonwebtoken');



exports.createWallet = (req, res)=>{
    if(!req.body){
	res.status(400).send({
	    message: "Content can not be empty!"
	});
	return;
    }

    else{
	var token = req.body.userId;
	var decoded = jwt.verify(token,  'RANDOM_TOKEN_SECRET');
	Wallet.create({wallets_user_id: decoded.userId, currency: req.body.currency})
	    .then(()=>{		
		res.status(201).send({message: decoded})
	})
        .catch(err=>{
	    res.status(500).send({
		message: err.message || "Some error occured"
	    });
	});
    }

   
};



exports.decodeToken = (req, res) =>{
    var token = req.params.token;
    var decoded = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    console.log(decoded);
    res.send('token match');


    
}


	

exports.findWallet = (req, res)=>{
    var token = req.params.userId;
    var decoded = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    Wallet.findOne({where: {
	wallets_user_id: decoded.userId,
	currency: req.params.currency
    }})

	.then(data=>{
	    	    res.status(200).json({walletId:data.id,
				  token:jwt.sign(
				      {walletId: data.id},
				      'RANDOM_TOKEN_SECRET',
				      {expiresIn: '24h'}
				  ),
				  userId:data.wallets_user_id,
				  currency:data.currency
				 })
	})

    
	.catch(err=>{
	    
	    res.status(500).send({
		message:  "Some error occured while retrieving the wallet"
	    })
	})
    
}




