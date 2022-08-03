const rankingModel = require('../models/rankingsModel');

const competitionRanking = (req, res, next) => {
  try {
    const { id } = req.params;
    const list = rankingModel.competitionRanking(id);

    return res.status(200).json({ list });

  } catch (erro) {
    next(erro)
  }
};

module.exports = {
  competitionRanking,
}