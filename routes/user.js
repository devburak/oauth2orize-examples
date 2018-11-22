'use strict';

const passport = require('passport');
const utils = require('../utils');

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
    var dtStr = Date.now().toString(36)
    var user_id =  utils.getUid(4)  + utils.getUid(4) + '-'+  dtStr.slice(4) + '-' + dtStr.slice(0,4) + '-' +utils.getUid(4) + '-'  + utils.getUid(12);

    // request.authInfo is set using the `info` argument supplied by
    // `BearerStrategy`. It is typically used to indicate scope of the token,
    // and used in access control checks. For illustrative purposes, this
    // example simply returns the scope in the response.
    // response.json({ user_id: request.user.id, name: request.user.name, scope: request.authInfo.scope });
    console.log('user create')
    response.send('user create' + request.body.username + ' uid ' + user_id)
  }
];

