'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes');

const db =require('./db');

// Express configuration
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./auth');

app.get('/', routes.site.index);
app.get('/login', routes.site.loginForm);
app.post('/login', routes.site.login);
app.get('/logout', routes.site.logout);
app.get('/account', routes.site.account);

app.get('/dialog/authorize', routes.oauth2.authorization);
//http://127.0.0.1:3000/dialog/authorize?response_type=code&client_id=3edeD99c-7512-M4CI-82e5-ecew54206c7f&redirect_uri=http://google.com
app.post('/dialog/authorize/decision', routes.oauth2.decision);

app.post('/oauth/token', routes.oauth2.token);

app.post('/logout',routes.oauth2.tokendelete);

app.get('/api/userinfo', routes.user.info);
app.get('/api/clientinfo', routes.client.info);
app.post('/api/createuser',routes.user.create);

const port = process.env.PORT || 3000
app.listen(port);
console.log('start at : 127.0.0.1:' + port);
