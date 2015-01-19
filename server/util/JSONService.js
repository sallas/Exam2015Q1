var o = function (method, port) {
    var express = require('express');
    var bodyParser = require('body-parser').json();
    var app = express();
    app.post('/', bodyParser, function (req, res) {
        method(req, function (err, result) {
            if (err) {
                res.status(400);
                res.end(JSON.stringify(err));
                return;
            }
            res.header("Content-type", "application/json");
            res.end(JSON.stringify(result));
        });
    });
    app.listen(port, function () {
        console.log('Started JSONserver');
    });
};

module.exports = o;
