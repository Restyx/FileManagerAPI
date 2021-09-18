var express = require('express');
var router = express.Router();
var { Client } = require('pg');

// declare PostgreSQL database parametres
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'fileSystem'
})

// connect to PostgreSQL database
client.connect()
  .then(() => console.log('connection succeeded'))
  .catch(err => console.error(err.stack));

// GET database table.
router.get('/', function (req, res, next) {
  const sql = 'SELECT filename, filepath FROM files;';
  client.query(sql)
    .then(result => res.json(result.rows))
    .catch(error => console.error(error.stack))
});

module.exports = router;
