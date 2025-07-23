const User = require('../models/userModel');
const { generateToken } = require('../services/tokenService');
const logger = require('../utils/logger');


exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    logger.info(`New user signed up: ${user.username}`);
    res.status(201).json({ message: 'User created', username: user.username });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
