var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


// upload file to database
router.post('/upload', function (req, res, next) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', (fieldname, file, filename) => {
        console.log("Uploading: " + filename);

        const filePath = path.join(__dirname, 'database', 'files', filename)    //Path where image will be uploaded

        fstream = fs.createWriteStream(filePath);
        file.pipe(fstream);
        fstream.on('close', function () {
            console.log("Upload Finished of " + filename);

            // add file and it's path to postgres database
            var sql = `INSERT INTO files (filename, filepath) VALUES ('${filename}', '${filePath}')`;
            var query = client.query(sql)
                .then(result => console.log(result))
                .catch(error => console.error(error.stack))
            res.redirect('/');
        });
    });
});

module.exports = router;
