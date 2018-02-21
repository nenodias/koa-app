var env = process.env.NODE_ENV || 'development';
const jwt = require('jsonwebtoken');
const config = require('../config/config.json')[env];

module.exports = {
  issue(payload, expiresIn) {
    return jwt.sign(payload, config.secret, {
    expiresIn})
  },
  verify(token) {
    return jwt.verify(token, config.secret);
  }
}
