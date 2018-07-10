var express = require('express');
var router = express.Router();
const request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  const url = "http://api.giphy.com/v1/gifs/random?api_key=2WPXFgfmjh0s7kMycJ7HJtoBdQq7ed2F";
  request.get(url, (err, response, body) => {
    if (err) {
      console.error(err);
    }
    body = JSON.parse(body);
    console.log(body);

    res.render('index', { title: 'Express' });
  });
});

module.exports = router;
