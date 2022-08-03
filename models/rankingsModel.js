const db = require('../database/db');

const competitionRanking = (id) => {
  const list = db.run(
    `SELECT * FROM results res 
    JOIN athletes ath ON ath.id = res.id_athlete
    JOIN competition com ON com.id = res.id_competition
    WHERE com.id = ?
    ORDER BY res.value DESC;`,[id]);

    return list;
};

module.exports = {
  competitionRanking,
}