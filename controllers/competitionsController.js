const competitionsModel = require('../models/competitionsModel');
const competitionsService = require('../services/competitionsService');


const create = (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      status: req.body.status,
    };
    const newCompetition = competitionsModel.create(data);

    return res.status(200).json({ newCompetition });
  } catch (erro) {
    next(erro);
  }
};

const updateStatus = (req, res, next) => {
  try {
    const { id } = req.params;
    competitionsService.updateStatus(id);

    return res.status(200).json({ message: "Status updated" });
  } catch (erro) {
    next(erro);
  }
};

module.exports = {
  create,
  updateStatus,
};

