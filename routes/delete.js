var express = require('express');
var router = express.Router();
var fs = require('fs');


// download file from database
router.delete('/delete', (req, res, next) => {
    fs.unlink(req.query.filepath, () => {
        var sql = `DELETE FROM files WHERE filepath='${req.query.filepath}'`;
        var query = client.query(sql)
            .then(result => console.log(result))
            .catch(error => console.error(error.stack))
    });
});

module.exports = router;
