const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = ':memory:';

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err
    }else{
        db.run(`CREATE TABLE competitions 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL)`,(err) => {
        if (err) {
            console.error(err.message);
            throw err
        }else{
            const insert = 'INSERT INTO competitions (name, status) VALUES (?,?)'
            db.run(insert, ["competição hidratacao","Em andamento"])
            db.run(insert, ["competição yoga","Em andamento"])
            db.run(insert, ["competição de perda de peso","Em andamento"])
            db.run(insert, ["competição dardos","Em andamento"])
        }
    })
        db.run(`CREATE TABLE athletes 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255) NOT NULL)`,(err) => {
        if (err) {
            console.error(err.message);
            throw err
        }else{
            const insert = 'INSERT INTO athletes (name) VALUES (?)'
            db.run(insert, ["Joao das Neves"])
            db.run(insert, ["Claudio"])
        }
})  
    }
        db.run(`CREATE TABLE results 
            (id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_competition INTEGER NOT NULL,
            id_athlete INTEGER NOT NULL,
            value INTEGER NOT NULL,
            unit VARCHAR(50) NOT NULL,
            FOREING KEY (id_competition)
                REFERENCES competitions (id)
            FOREING KEY (id_athlete)
                REFERENCES athletes (id)
            )`,(err) => {
        if (err) {
            console.error(err.message);
            throw err
        }else{
            const insert = 'INSERT INTO results (id_competition, id_athlete, value, unit) VALUES (?,?,?,?)'
            db.run(insert, [""])
        }
    })
})

module.exports = db
