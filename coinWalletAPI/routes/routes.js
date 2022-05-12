const { Router } = require('express');
const router = Router();
const reqID = require('../controllers/identification.controller.js');
const reqWallet = require('../controllers/wallet.controller.js');
const reqTransaction = require('../controllers/transaction.controller.js');
var modelDB = require('../model.json');



router.get("/", function(req, res){
    res.json({modelDB})
});
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

