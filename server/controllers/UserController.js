const { User } = require('./../models/Models');

// middleware functions for User mongoose model

const userController = {};

userController.create = (req, res, next) => {
  // get username and password from request body
  const { username, password } = req.body;

  User
    .create({ username, password })
    .then(data => {
      console.log('usercreate data', data);
      res.locals.userid = data._id;
      res.locals.username = data.username;
      next();
    })
    .catch(err => {
      console.log('error in UserCreate');
      console.log(err);
      next();
    })
}

userController.verify = (req, res, next) => {
  const { username, password } = req.body;
  console.log('user data received!', { username, password });

  User
    .findOne({ username })
    .then(data => {
      console.log('login data', data);
      if (data === null) {
        console.log('user not found');
        next();
      }
      else if (data.password === password) {
        console.log('password matches');
        res.locals.userid = data._id;
        res.locals.username = data.username;
        next();
      }
      else {
        console.log('password does not match');
        next();
      }
    })
    .catch(err => {
      console.log('error in UserVerify', err);
      res.redirect('/')
    })
}

userController.update = (req, res, next) => {

}

userController.delete = (req, res, next) => {

}

module.exports = userController;