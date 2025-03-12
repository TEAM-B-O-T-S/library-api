import Joi from "joi";

export const addbookValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  publishedYear: Joi.number().required(),
  image: Joi.string().required(),
});
