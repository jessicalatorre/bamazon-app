// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

//1 - est connection to database
//2 - now let's query data from database (using JS). NOTE: Console.log to display list of options for customer. This also ensure you're able to return results from database, but after this you'll need to clean up results, so you're able to disply a more simple list to customers

var inquirer = require('inquirer');
var mysql = require('mysql');
var colors = require('colors');

//global variable for products to intialize variable
var products = null;

//var num = 0 will initialize with 0 if you intialize with var num; it will log in console as undefined, and if you're console logging a lot you don't necessarily want to see undefined for a var you initialized if you're trouble shooting other errors

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'bamazon'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('HUZZAH! Connected as id ' + connection.threadId);
});

//snytax from mysql npm
//connectoin query with cb
//parameter can be called whatever you want, but the order is imporant. Error always first, then results, then fields.
connection.query('SELECT * FROM products', function (err, results, fields) {
    if(err) throw error;
    // console.log(results); //first console log - this is logged as an array of results
    //logic to simplify what needs to be displayed to customers
    //use for loop to do this; can also use for each.
    //before we do, assign results to products var since it was initialized as null. Assigning it globally as null allows us to use it any function we want to, but we must assign it the correct parameter we're trying to return in each function (as it makes sense);
    products = results;
    for (var i = 0; i <products.length; i++) {
        //second console log - write abbreviated list for customer
        console.log (products[i].item_id + ' ' + products[i].product_name + ' ' + products[i].price);
    }
  });


