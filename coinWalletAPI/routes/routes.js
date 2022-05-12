const { Router } = require('express');
const router = Router();
const auth = require('../middlewares/auth');
const reqID = require('../controllers/identification.controller.js');
const reqWallet = require('../controllers/wallet.controller.js');
const reqTransaction = require('../controllers/transaction.controller.js');


router.get("/", function (req, res) {
    res.send({message:res})
})
router.post('/signup', reqID.createID);
router.get("/login/:email/:pass", reqID.verifyID);
router.post('/create-wallet', reqWallet.createWallet);
router.post('/create-journal', reqTransaction.createJournal);
router.get('/wallet-data/:userId/:currency', reqWallet.findWallet);
router.get("/set-cookie", reqID.createCookie);
router.get("/pin-verify/:userId/:pin", reqID.verifyPin);
router.put("/updatepassword/:userId/:pass", reqID.updateID);
router.delete("/delete/:userId", reqID.delete);
router.delete("/", reqID.deleteAll);








module.exports = router;

/*
module.exports = app =>{

    const identification = require("../controllers/identification.controller.js");
    var router = require("express").Router();

    router.post("/", identification.createID);
    router.get("/", identification.findEmail);
    router.get("/:id", identification.findOne);
    router.put("/:id", identification.update);
    router.delete("/:id", identification.delete);
    router.delete("/", identification.deleteAll);
    app.use('/', router);


};
*/

/*
var express = require('express');
var router = express.Router();
var controller = require('../controllers/identification.controller.js');

router.use(function timeLog(req, res, next){
    console.log('Time' , Date.now());
});

router.post("/", controller.createID);

module.exports = router;
*/
