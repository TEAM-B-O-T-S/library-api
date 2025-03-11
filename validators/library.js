import Joi from "joi";

export const addbookValidator = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string(),
  status: Joi.string(),
  quantity: Joi.number(),
  publishedyear: Joi.number(),
});
