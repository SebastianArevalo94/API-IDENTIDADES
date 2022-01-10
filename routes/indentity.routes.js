const { Router } = require('express');
const identityController = require('../controllers/identity.controllers');
const router = Router();

router.post(`/post`,identityController.postFake)

module.exports = router;