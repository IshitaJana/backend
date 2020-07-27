const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./keys');

var User = mongoose.model('user');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username },
                (err, user)=> {
                    if (err)
                        return done(err);
                    else if (!user)
                        return done(null, false, { message: 'Email is not registered.' });
                    else if(!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong Password.' });
                    else
                        return done(null, user);
                });
        })
);

// passport.use(
//     new GoogleStrategy({
//         // options for google strategy
//         callbackURL: '/auth/google/redirect',
//         clientID: keys.google.clientID,
//         clientSecret: keys.google.clientSecret
//     }, (accessToken, refreshToken, profile, done) => {
//         // passport callback function
//         console.log('callback func fired');
//         console.log(profile);
//     })
// );