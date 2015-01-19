var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.redirect("app/index.html")
});

router.post('/', function (req, res) {
    console.log(req.body);
});

//Get Partials made as Views
router.get('/partials/:partialName', function(req, res) {
  var name = req.params.partialName;
  res.render('partials/' + name);
});

module.exports = router;
