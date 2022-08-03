const competitionsModel = require('../models/competitionsModel');

const updateStatus = (id) => {
  const currentStatus = competitionsModel.verifyCurrentStatus(id);
  if (currentStatus === "Em andamento") {
    competitionsModel.updateStatus(id, "Concluído")
  }
  if (currentStatus === "Concluído") {
    competitionsModel.updateStatus(id, "Em andamento")
  }
};

module.exports = {
  updateStatus,
};
