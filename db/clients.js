'use strict';
var data = require('../db/dbConnection');


module.exports.findById = (id, done) => {

  data.query('Select * FROM clients Where id = ?' , id, function(err,response){
    if(err)  return done(new Error('Client Not Found'));
    if(!response.length)  return done(new Error('Client Not Found'));
    return done(null, response[0]);

  })
  
  // for (let i = 0, len = clients.length; i < len; i++) {
  
  //   if (clients[i].id === id) return done(null, clients[i]);
  // }
  // return done(new Error('Client Not Found'));
};

module.exports.findByClientId = (clientId, done) => {
 
  data.query('Select * FROM clients Where clientId = ?' , clientId, function(err,response){
    console.log(this.sql)
    if(err)  return done(new Error('Client Not Found'));
    if(!response.length)  return done(new Error('Client Not Found'));
    return done(null, response[0]);

  })

  // for (let i = 0, len = clients.length; i < len; i++) {

  //   if (clients[i].clientId === clientId) return done(null, clients[i]);
  // }
  // return done(new Error('Client Not Found'));
};
