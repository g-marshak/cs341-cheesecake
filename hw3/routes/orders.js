//author: gabby marshak
var express = require('express');
var router = express.Router();

/* GET orders (json objects) 
router.get('/', function(req, res, next) {
  res.json({"orders":[
      {"topping":"cherry", "quantity":2},
      {"topping":"chocolate", "quantity":3},
      {"topping":"plain", "quantity":4}
  ]});
});*/

/*post order handler*/
router.post('/', function(req, res, next) {
    res.json({"orders":[
        {"topping":"cherry", "quantity":5},
        {"topping":"chocolate", "quantity":6},
        {"topping":"plain", "quantity":7}
    ]});
  });

module.exports = router;