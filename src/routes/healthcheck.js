const express = require('express');
const healthcheckController = require('../controllers/healthcheck');

const router = express.Router();

router.get('/', healthcheckController.fetchHealthcheck);

module.exports = router;
