const express = require('express');
const viewsController = require('./controllers/views.controller.js');
const foodController = require('./controllers/food.controller.js');

const router = express.Router();

router.get('/', viewsController.getHome);
router.get('/food/:foodName', foodController.getFood);

module.exports = router;
