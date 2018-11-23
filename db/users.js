'use strict';
var data = require('../db/dbConnection');

module.exports.findById = (id, done) => {

  data.query('Select * FROM users Where id = ?' , id, function(err,response){
    if(err)  return done(new Error('User Not Found'));
    if(!response.length)  return done(new Error('User Not Found'));
    return done(null, response[0]);

  })

};

module.exports.findByUsername = (username, done) => {

  data.query('Select * FROM users Where username = ?' , username, function(err,response){
    if(err)  return done(new Error('User Not Found'));
    if(!response.length)  return done(new Error('User Not Found'));
    return done(null, response[0]);

  })
};

module.exports.newUser = (user_id,data_,done)=>{
  console.log(data_)
  if(!data_) return done(new Error('User information fail'))
  console.log('here')
    data.query('Select * From users Where username = ? or email = ?', [data_.username,data_.email], function(err,response){
      console.log(response)
      console.log(err)
      console.log(!response.length)
    if(err) return done(new Error('User Not Created'));
    if(response.length) return done(new Error('User Already Created'));
    data.query('INSERT INTO users SET ? ', {id:user_id,...data_}, function(err,response) {
      console.log(this.sql)
      if(err) return done(new Error('User Create Fail'))
      return done(null,true);
    } )
  })
}
