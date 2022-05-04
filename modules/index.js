const express = require('express')
const app = express()
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Users"
});

app.get('/', (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM data", function (err, result, fields) {
      if (err) throw err;
      // console.log(result);
      res.send(result)
    });
  });
  
})

app.listen(3002, () => console.log('Server ready'))
