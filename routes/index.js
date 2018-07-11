const express = require('express');
const router = express.Router();

// Add this line
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  // Add the following 5 lines (be sure to add _your_ API key to the URL)
  const url = "http://api.giphy.com/v1/gifs/random?api_key=YOUR-API-KEY";
  request.get(url, (err, response, body) => {
    if(err) { console.error(err) }

    body = JSON.parse(body);
    console.log(body);

    res.render('index', { title: 'Make School Giphy' });
  });
});

module.exports = router;
