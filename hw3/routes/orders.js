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
  //given month, make db query for quantities of toppings
  var month = res; //placeholder for now

  //building query strings
  var cherry_query = 'SELECT COUNT( * ) from ORDERS where MONTH=' + month + " and TOPPING='cherry';";
  var chocolate_query = 'SELECT COUNT( * ) from ORDERS where MONTH=' + month + " and TOPPING='chocolate';";
  var plain_query = 'SELECT COUNT( * ) from ORDERS where MONTH=' + month + " and TOPPING='plain';";

  //getting query results (could not get program to run while also trying to query db)
  //var cherry_num = dbquery(cherry_query);
  var cherry_num = 5;
  var chocolate_num = 6;
  var plain_num = 7;

  //building json string
  var cherry_str = '{"topping":"cherry", "quantity":' + cherry_num + '}';
  var chocolate_str = '{"topping":"chocolate", "quantity":' + chocolate_num + '}';
  var plain_str = '{"topping":"plain", "quantity":' + plain_num + '}';
  var json_str = '{"orders":[' + cherry_str + ',' + chocolate_str + ',' + plain_str + ']}';
  
  //sending post request
  res.json(json_str);
  });

module.exports = router;