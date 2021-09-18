var express = require('express');
var router = express.Router();
var client = require('./db');

// GET database table.
router.get('/', function (req, res, next) {
    const sql = 'SELECT filename, filepath FROM files;';
    client.query(sql)
        .then(result => res.json(result.rows))
        .catch(error => console.error(error.stack))
});

module.exports = router;
