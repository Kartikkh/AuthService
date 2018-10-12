
const express = require('express');
const router = express.Router();
const logoutController = require('../controller/logout');

router.route('/')
    .get(logoutController.logout);

module.exports = router;
