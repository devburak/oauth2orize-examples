'use strict';

var data = require('../db/dbConnection');
const codes = {};

module.exports.find = (key, done) => {
  console.log('burada')
  data.query('Select * FROM codes where code = ?' , key,function(err,response){
    console.log(this.sql)
    if(err){ return done(new Error('Code Not Found'));}
    if(!response.length) return done(new Error('Code Not Found'));
    const code = {'userId':response[0].userId, 'clientId':response[0].clientId, 'redirectUri':response[0].redirectUri}
    return done(null, code);  
  })
  // if (codes[key]) return done(null, codes[key]);
  // return done(new Error('Code Not Found'));
};

module.exports.save = (code, clientId, redirectUri, userId, done) => {

  data.query('select * from codes where userId = ? and clientId = ? and redirectUri = ?', [userId, clientId, redirectUri], function (err, res) {
 
    if (err) return done(new Error('code set fail'));
    if (res.length > 0) {

      data.query('Update codes SET ? where userId = ? and clientId = ? and redirectUri = ?', [{ code: code }, userId, clientId, redirectUri], function (err, response) {
        if (err) { return done(new Error('code set fail')); }
        done();
      })
    }
    else {
      data.query('INSERT INTO codes SET ?', { code: code, userId: userId, clientId: clientId, redirectUri: redirectUri }, function (err, response) {
        
        if (err) { return done(new Error('token set fail')); }
        done();
      })
    }
  })

  // codes[code] = { clientId, redirectUri, userId };
  // done();
};
