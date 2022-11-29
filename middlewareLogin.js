const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'decodage');
    const userId = decodedToken.userId;
    if (decodedToken) {
      next();
    } else {
        throw 'Invalid user ID';
    }
  } catch(e) {
    console.log(e);
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};