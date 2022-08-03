const express = require('express');
const competitionsController = require('../controllers/competitionsController');

const routeCompetitions = express.Router();

routeCompetitions.post('/', competitionsController.create);

routeCompetitions.put('/:id', competitionsController.updateStatus);

module.exports = routeCompetitions;