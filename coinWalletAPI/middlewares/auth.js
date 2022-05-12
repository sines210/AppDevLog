var jwt = require('jsonwebtoken');


module.exports = (req, res, next)=>{

    try{
        var token = req.headers.authorization.split(' ')[1] // le headers authorization affiche bearer puis le token ici on récupere le header, on le split a l'espace puis recupere le deuxieme element donc juste le token
        var decodedToken = jwtoken.verify(token, 'RANDOM_TOKEN_SECRET')//ici on vérifie le token avec la clé secrete qu'on a donné dans l'encodage du token dans le contrller user
        var userId = decodedToken.userId
	
	if(req.body.userId && req.body.userId!==userId){
	    throw 'User ID not matching'
	}
	else{
	    next()
	}
    }
    catch(error){
	res.status(401).json({error: error | 'error' })
    }

}


 //ici on implémente les requetes dans un try catch pour ne pas faire planter tout le code s'il y a des erreurs dans les requetes


//ici ce middleware sert à protéger les routes, ce qui veut dire que le code est exécuté avent les controlleurs dans les routes de requetes
