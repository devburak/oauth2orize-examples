'use strict';
var data = require('../db/dbConnection');

const clients = [
  {
    id:'1',
     clientId:'3edef99c-7512-M4CI-82e5-ece6c4206c7f',
      name: 'app',
      clientSecret:'14efe9b341cd-ac469366fb6abb4b'
  },
  {
    id:'2',
     clientId:'3edeD99c-7512-M4CI-82e5-ecew54206c7f',
      name: 'Müllkiyeliler Birliği',
      clientSecret:'14efe9b341cd-ac469366fb6cvb4b'
  }
]

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
