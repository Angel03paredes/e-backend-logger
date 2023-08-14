const joi = require("joi")
joi.objectId = require('joi-objectid')(joi)

exports.newLogSchema = joi.object({
    type: joi.string().valid("error","info","warning").required(), 
    priority: joi.string().valid("lowest", "low", "medium", "high", "highest").required() ,
    path:joi.string().required(),
    message:joi.string().optional().allow(null),
    request:joi.object().optional().allow(null),
    response:joi.object().optional().allow(null),
});

exports.updateLogSchema = joi.object({
    type: joi.string().valid("error","info","warning").optional(), 
    priority: joi.string().valid("lowest", "low", "medium", "high", "highest").optional() ,
    path:joi.string().optional(),
    message:joi.string().optional(),
    request:joi.object().optional(),
    response:joi.object().optional(),
});

exports.idLogSchema = joi.object({
    id:joi.objectId().required()
})