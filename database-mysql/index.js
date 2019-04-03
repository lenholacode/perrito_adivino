var mysql = require('mysql');

require('dotenv').config();

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports.selectAll = selectAll;
