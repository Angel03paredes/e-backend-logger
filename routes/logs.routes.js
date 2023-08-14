'use strict';

const router = require('express').Router();
const validatorHandler = require("./../middlewares/validator.handler")
const {newLogSchema,idLogSchema,updateLogSchema} = require("./../schemas/log.schema")
const {ensureAuth} = require("./../middlewares/auth")
const prefix = '/logs';

const controller = require('../controllers/logs.controller');

router.get(`${prefix}/`,[ensureAuth], controller.all);
router.get(`${prefix}/byApp`,[ensureAuth], controller.allByApp);
router.post(`${prefix}/`,[ensureAuth,validatorHandler(newLogSchema,"body")], controller.create);
router.get(`${prefix}/:id`,[ensureAuth,validatorHandler(idLogSchema,"params")], controller.info);
router.put(`${prefix}/:id`, [ensureAuth,validatorHandler(idLogSchema,"params"),validatorHandler(updateLogSchema,"body")],controller.update);
router.delete(`${prefix}/:id`,[ensureAuth,validatorHandler(idLogSchema,"params")], controller.delete);

module.exports = router;