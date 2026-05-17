var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var places = [
    { name: 'Home', rating: 10 },
    { name: 'Beach', rating: 9 },
    { name: 'Virginia mall', rating: 8 },
    { name: 'University', rating: 7 },
    { name: 'Library', rating: 8 }
  ];

  var myname = "Kwadwo Owusu";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;