const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../../models/user.model');
const bcrypt   = require('bcrypt');

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) =>  {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: "Please provide all fields" });
    ;
  }
  User.findOne({ username }, "username")
    .then( user => {
      if (user !== null) {
        return res.status(400).json({
           message: "The username already exists"
         });
      }

      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = User({
        username,
        email,
        password: hashPass
      });

      newUser.save()
        .then(() => {
          req.login(newUser)
            .then(() => {return res.status(200).json(req.user);})
            .catch( err => {
              return res.status(500).json({
                message: 'something went wrong'
              });
            })
          })
        .catch( err => { res.status(400).json({ message: "Something went wrong" }); })
    })
    .catch( err => { res.status(400).json({ message: "Something went wrong" }); })
 });

router.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.post("/loggedin", function(req, res) {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  return res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
