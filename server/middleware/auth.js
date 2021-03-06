require('dotenv').load();
var jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
  try {
      var token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
          if (decoded) next();
          else res.status(401).json({ message: 'Please log in first!' });
      });
  }
  catch (e) {
      res.status(401).json({ message: 'Please log in first!' });
  }
};

exports.ensureCorrectUser = function(req, res, next) {
  // decode the jwt
    // inside of callback
        // if the userId === req.params.id
            // authorized
        // else
            // not authorized
  try {
      var token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (decoded && decoded.userId === req.params.id) next();
        else res.status(401).json({ message: 'Unauthorized' });
      });
  } catch (e) {
      res.status(401).json({ message: 'Unauthorized!' });
  }
};