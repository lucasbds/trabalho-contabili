// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Armazena os dados em memória, pode usar um arquivo

db.serialize(() => {
  db.run(`CREATE TABLE lancamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conta TEXT,
    valor REAL,
    tipo TEXT,
    data TEXT
  )`);
});

module.exports = db;
