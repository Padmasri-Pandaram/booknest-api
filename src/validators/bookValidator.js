const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().optional(),
  publishedYear: Joi.number().integer().optional(),
});

module.exports = bookSchema;
