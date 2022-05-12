const db = require("../models");
const Identification = db.identification;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
var env = require('../env');

  

exports.createID = (req, res)=>{
    if(!req.body){
	res.status(400).send({
	    message: "Content can not be empty!"
	});
	return;
    }

    else{
	Identification.create({email:req.body.email, pass:bcrypt.hashSync(req.body.pass, salt)})
	    .then(()=>{		
		res.status(201).send({message: "user created"})
	})
        .catch(err=>{
	    res.status(500).send({
		message: err.message || "Some error occured while creating"
	    });
	});
    }

   
};




exports.createCookie = (req, res)=>{
    res.setHeader('set-cookie', "foo=bar")
    res.cookie('cookiename', 'valuex')
    res.send('cookie set')

    /*2 methodes pour set cookie, sans options par defaut le cookie persiste le temps de la session
    exple options res.setHeader('Set-Cookie','visited=true; Max-Age=3000; HttpOnly, Secure')*/
}


exports.verifyID = (req, res)=>{
    var emailParam = req.params.email;
    var passParam= req.params.pass;
    var id = req.params.id;
    
    Identification.findOne({where: {
	email: emailParam,
    }})

	.then(data=>{
	    bcrypt.compareSync(passParam, data['pass'])
 		? res.status(200).json({userId: data.id,
				        token: jwt.sign(
					    {userId: data.id},
					    env.setEnv.secret,
					    {expiresIn: '24h'}
					  )
					  })
		: res.status(500).send({message:'no match'})
	})
    
	.catch(err=>{
	    
	    res.status(500).send({
		message: err.message || "Some error occured while retrieving all"
	    })
	})
    
}



exports.verifyPin = (req, res)=>{
    var token = req.params.userId;
    var decoded = jwt.verify(token, env.setEnv.secret);
    var pinToVerify = req.params.pin;
    
    Identification.findOne({where: {
	id: decoded.userId
    }})

	.then(data=>{
	    bcrypt.compareSync(pinToVerify, data['pass'])
 		? res.status(200).json({message: "pin ok"})
		: res.status(500).send({message:'no match'})
	})
    
	.catch(err=>{
	    
	    res.status(500).send({
		message: err.message || "Some error occured while retrieving all"
	    })
	})
    
}

exports.updateID = (req, res)=>{
    var token = req.params.userId;
    var decoded = jwt.verify(token,  env.setEnv.secret);
    Identification.update({pass:bcrypt.hashSync(req.params.pass, salt)}, {
    where: { id: decoded.userId }
  })
	.then((data) => {
	    res.status(201).send({message:'Password updatded'})
    })
	.catch(err => {
	    res.status(500).send({
		message: "Error updating Identification with id=" + id
      });
    });
};

exports.delete = (req, res)=>{
  var token = req.params.userId;
  var decoded = jwt.verify(token, env.setEnv.secret);  
  Identification.destroy({
    where: { id: decoded.userId }
  })
    .then((data) => {
	res.status(201).send({message:'Account deleted'})
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Identifiaction" 
      });
    });
};

exports.deleteAll = (req, res)=>{
     Identification.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Identification were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all identifications."
      });
    });
};

exports.findAllByCondition = (req, res)=>{
    Identification.findAll({ where: { someBooleanFieldAsCondition: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving identification."
      });
    });
};

