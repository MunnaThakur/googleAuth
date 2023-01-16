const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");

const PORT = 3000;
const app = express();

passport.use(
  new googleStrategy(
    {
      clientID: "928350860559-pqbjle6e28b57d85l599l3g2vpm8e018.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Tok', accessToken);
      console.log('Refresh tok', refreshToken);
      console.log('profile', profile)
    })
);
app.get("/auth/google",passport.authenticate("google", {
    scope: ["profile","email"],
  })
);
app.get("/auth/google/callback",passport.authenticate("google"));

app.listen(PORT, () => {
  console.log(`server is listning on port no ${PORT}`);
});
