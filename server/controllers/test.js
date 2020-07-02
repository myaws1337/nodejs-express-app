/**
 * http://usejsdoc.org/
 */
connection.query("SELECT * FROM bank_accounts WHERE dob = '"+ req.body.dob +"' AND bank_account = '"+ req.body.account_number4 +"'",function(error, results){});
