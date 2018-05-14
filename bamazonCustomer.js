// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

//1 - est connection to database
//2 - now let's query data from database (using JS). NOTE: Console.log to display list of options for customer. This also ensure you're able to return results from database, but after this you'll need to clean up results, so you're able to disply a more simple list to customers
//3 - create a function using inquirer documentation that prompts customer for product specifications. this function WILL be called back in the connection.query function (NESTING FUNCTIONS)
//4 

var inquirer = require('inquirer');
var mysql = require('mysql');
var colors = require('colors');

//this is inquirer npm syntax. just creating variable of purchase questions outside of function to make it easier to read.
var purchaseQuestions = [
    {
        name: 'buyID', // this same as var name = 'buyID" this is what the inquirer module is doing based on this syntax
        message: 'Enter id of the item you wish to purchase'
    },
    {
        name: 'purchaseQuantity',
        message: "Enter the Amount you wish you to purchase"
    },
    // {
    //     name: 'continueShopping', //result is pushed into var called continue shopping
    //     message:"What is the id of the next item you'd like to purchase?"
    // }

]

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

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('HUZZAH! Connected as id ' + connection.threadId);
});

//Step 2 - return results and console results and abbreviated list for customer
//snytax from mysql npm
//connection query with cb
//parameter can be called whatever you want, but the order is imporant. Error always first, then results, then fields.

connection.query('SELECT * FROM products', function (err, results, fields) {
    if (err) throw error;
    // console.log(results); //first console log - this is logged as an array of results
    //logic to simplify what needs to be displayed to customers
    //use for loop to do this; can also use for each.
    //before we do, assign results to products var since it was initialized as null. Assigning it globally as null allows us to use it any function we want to, but we must assign it the correct parameter we're trying to return in each function (as it makes sense);
    products = results;
    for (var i = 0; i < products.length; i++) {
        //second console log - write abbreviated list for customer
        console.log(products[i].item_id + ' ' + products[i].product_name + ' ' + products[i].price);
    }
    customerPrompt();
});

//NOTE: we Nest this function above in query function
function customerPrompt() {
    //use inquirer documentation and used global variable for array of answers
    //=> is ES6 same as function(answers)
    //using function(answers) in this case for cb
    inquirer.prompt(purchaseQuestions).then(function (answers) {
        console.log(answers) //console log returned: { buyID: '4545666', purchaseQuanity: '2' }
        //helper function
        var item = getItemById(answers.buyID); //answers.buyID is the customer input. we pass this into the getItemById function to ensure product ID is valid so create if statment to check quantity in stock
        if(item){ //if true, seach for quanity. True means anything not undefined, null, false, anything smaller than 0.
            var stockQuantity = item.stock_quantity;
            if(stockQuantity < answers.purchaseQuantity) {
                console.log('insufficient quantity'.red);
            }
        } else {
            console.log('Please enter a valid item id'.red);
            customerPrompt();
        }
    });
}

//this helper function searches for id customer input. This function is called above
function getItemById(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].item_id == id) {
            return products[i];
        }
    }
    //NOTE: If customer inputs incorrect id it will return null
    return null;
}







