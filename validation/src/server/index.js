var mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'demo'
});
connection.connect((err) => {
    if (err) throw err;
    else console.log('Connected!');
  }); 
app.get('/getdata',(req,res) => {
    connection.query('SELECT * FROM login', (err,rows) => {
        if(err) throw err;
        //console.log(rows);
        res.status(200).json(rows);
      });
});
//console.log(connection);
app.post('/postdata', (req, res) => {
     let data = req.body;
connection.query('INSERT INTO login SET ?',data,(err, res2) => {
  if(err) throw err;
  res.send(JSON.stringify(res2));
  //console.log(res2);
});
    })
app.listen(3000);