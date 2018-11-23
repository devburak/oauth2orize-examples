var mysql = require('mysql2')


const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'oauth',
  port: 3302,
  "dateStrings": true
  //connectTimeout: 100000
});

//console.log(connection.state )
//connection.connect();
module.exports=connection;