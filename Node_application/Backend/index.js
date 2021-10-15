const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'dromtorp'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
  if(error) throw error;
  console.log('The solution is: ', results[0].solution)
)};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
