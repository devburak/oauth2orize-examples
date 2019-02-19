'use strict';
var data = require('../db/dbConnection');


module.exports.find = (key, done) => {
  data.query('Select * FROM tokens where token = ?' , key,function(err,response){
    console.log(this.sql)
    if(err){ return done(new Error('Token Not Found'));}
    if(!response.length) return done(new Error('Token Not Found'));
    const token = {'userId':response[0].userId, 'clientId':response[0].clientId}
    return done(null, token);  
  })
  // if (tokens[key]) return done(null, tokens[key]);
  // return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {

  data.query('Select * FROM tokens where userId = ? and clientId = ?' , [userId,clientId],function(err,response){
    if(err){ return done(new Error('Token Not Found'));}
    if(!response.length) { return done(new Error('Token Not Found'));}
    return done(null, response[0].token);  
  })
  // for (const token in tokens) {
  //   if (tokens[token].userId === userId && tokens[token].clientId === clientId) { console.log(token); return done(null, token); }
  // }
  // return done(new Error('Token Not Found'));
};


module.exports.save = (token, userId, clientId, done) => {
  data.query('select * from tokens where userId = ? and clientId = ?', [userId, clientId], function (err, res) {
  
    if (err) return done(new Error('token set fail'));
    if (res.length > 0) {

      data.query('Update tokens SET ? where userId = ? and clientId = ?', [{ token: token }, userId, clientId], function (err, response) {
        console.log(this.sql)

        if (err) { return done(new Error('token set fail')); }

        done();
      })
    }
    else {
      data.query('INSERT INTO tokens SET ?', { token: token, userId: userId, clientId: clientId }, function (err, response) {
        console.log(this.sql)
        if (err) { return done(new Error('token set fail'));}

        done();
      })
    }
  })

  // tokens[token] = { userId, clientId };
};


module.exports.delete = (token, done) =>{
  data.query('delete from tokens where token = ? ',token,function(err,response){
    console.log(this.sql)
    if (err) return done(new Error('token set fail'));
    done(null,true);
  })
}