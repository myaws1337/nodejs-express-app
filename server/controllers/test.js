/**
 * http://usejsdoc.org/
 */
connection.query("SELECT * FROM product WHERE prod = '"+ req.body.prod +"' AND product_name = '"+ req.body.product_name +"'",function(error, results){});
