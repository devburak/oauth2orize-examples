'use strict';

const passport = require('passport');
const utils = require('../utils');
const db = require('../db');

module.exports.info = [
  passport.authenticate('bearer', { session: false }),
  (request, response) => {
    // request.authInfo is set using the `info` argument supplied by
    // `BearerStrategy`. It is typically used to indicate scope of the token,
    // and used in access control checks. For illustrative purposes, this
    // example simply returns the scope in the response.
    response.json({ user_id: request.user.id, name: request.user.name, scope: request.authInfo.scope, role: request.user.role });
  }
];

module.exports.create = [
  passport.authenticate('bearer', { session: false }),
  (request, response) => {
    // if(request.user.role != '{"Sube_ID":"1"}') return response.status(403).send('fail')
    response.send(request.user)
    console.log(request.user.clientId)
    // var dtStr = Date.now().toString(36);
    // console.log(request.user.id  + 'user.js 23')
    // var newuser_id =  utils.getUid(4)  + utils.getUid(4) + '-'+  dtStr.slice(4) + '-' + dtStr.slice(0,4) + '-' +utils.getUid(4) + '-'  + utils.getUid(12);
    // db.users.newUser(newuser_id,request.body,(error) => {
    //   if (error) return response.status(400).send('create error ')
    //   response.send(newuser_id)
    // });

  }
];

