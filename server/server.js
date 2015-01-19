var JSONService = require("./util/JSONService");

var handleRequest = function (req, callback) {
    if (!req.body.name) callback("No name!");
    else callback(null, {result: "Hello " + req.body.name});
};

JSONService(handleRequest, 3000);