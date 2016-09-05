var express = require('express');
var router = express.Router();
var Transaction = require('models/transaction');

router.get('/', function(req, res, next) {
  Transaction.find(function(err, transactions) {
    res.send(transactions);
  })
});

router.post('/transactions', function(req, res) {  
  var transaction = new Transaction(req.body.transaction);
  transaction.save(function(err, transaction) {
    if(err){
      return res.send(err);
    }
    return res.send(transaction);
  });
});

module.exports = router;
