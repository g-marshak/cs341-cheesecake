//author: gabby marshak
var express = require('express');
const { dbquery } = require('./dmbs');
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
    //query for current table size, add 1 to get new id
    var orderid = 0;
    var month = 'DEC';
    var day = 0;
    var quantity = 0;
    var topping = 'plain';
    var notes = '';


    //build query str (notes col introduces possibility of sql injection attack)
    var order_str = "VALUES("+ orderid +","+ month +","+ day +","+ quantity +","+ topping +","+ notes +")";
    var query_str = "INSERT into ORDERS(ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES)" + order_str;

    //insert into table
    //dbquery(query_str);
  
    //sending post request
    res.json();
});

module.exports = router;