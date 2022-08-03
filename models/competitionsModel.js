const db = require('../database/db');

const create = (data) => {
  const { name, status } = data;
  const newCompetition = db.run('INSERT INTO competitions (name, status) VALUES (?,?)', [name, status]);

  return newCompetition;
};

const verifyCurrentStatus = (id) => {
  const { competition } = db.get('SELECT * from competitions WHERE id = ?', [id]);
  return competition.status;
};

const updateStatus = (id, status) => {
  
  db.run('UPDATE competition status = ? WHERE id = ?', [status, id]);

};

module.exports = {
  create,
  verifyCurrentStatus,
  updateStatus,
};