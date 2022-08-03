const express = require('express');

const rankingsController = require('../controllers/rankingsController');

const routeRankings = express.Router();

routeRankings.get('/:id', rankingsController.competitionRanking);

module.exports = routeRankings;