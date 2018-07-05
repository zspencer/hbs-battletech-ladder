const express = require('express')
    , passport = require('express-session')
    , DiscordStrategy = require('passport-discord').Strategy
    , app = express();

passport.seralizeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
