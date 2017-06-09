const passport = require('passport');
const router = require('express').Router();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../db/models/user');

const googleConfig = {
  clientID: '787713847540-snu2l77mhv4dr7o37cm87o6u95ksahd8.apps.googleusercontent.com',
  clientSecret: 'IGk8RizavbfCPeUsu7oTP_mv',
  callbackURL: '/auth/google/callback'
};

const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
  const googleId = profile.id;
  const name = profile.displayName;
  const email = profile.emails[0].value;

  User.find({ where: { googleId } })
    .then(user => user ?
      done(null, user) :
      User.create({ name, email, googleId })
        .then(user => done(null, user))
    )
    .catch(done);
});

passport.use(strategy);

module.exports = router
  .get('/', passport.authenticate('google', { scope: 'email' }))
  .get('/callback', passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));
