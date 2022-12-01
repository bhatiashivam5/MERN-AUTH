const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GOOGLE_CLIENT_ID = "809090341584-vjvucel14latco6lktt124ujjh8608pm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "809090341584-vjvucel14latco6lktt124ujjh8608pm.apps.googleusercontent.com";
const FACEBOOK_APP_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
       done(null,profile)
    }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user,done) =>{
    done(null,user)
})

passport.deserializeUser((user,done) =>{
    done(null,user)
})