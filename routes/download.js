var express = require('express');
var router = express.Router();

// download file from database
router.get('/download', function (req, res, next) {
  res.download(req.query.filepath);
});

module.exports = router;
