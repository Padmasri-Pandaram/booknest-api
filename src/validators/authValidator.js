const Joi = require('joi');

exports.signupSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin').optional()
});

exports.loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});
