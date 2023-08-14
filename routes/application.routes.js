'use strict';

const router = require('express').Router();
const validatorHandler = require("./../middlewares/validator.handler")
const {newAppSchema,authSchema} = require("./../schemas/application.schema")
const prefix = '/applications';

const controller = require('../controllers/applications.controller');

router.post(`${prefix}/`,validatorHandler(newAppSchema,"body"), controller.create);
router.post(`${prefix}/auth`,validatorHandler(authSchema,"body"), controller.auth);
router.get(`${prefix}/`,controller.all)

module.exports = router;