const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

exports.newAppSchema = joi.object({
  name: joi.string().required(),
});

exports.authSchema = joi.object({
  application_id: joi.objectId().required(),
});
