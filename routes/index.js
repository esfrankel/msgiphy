const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = "http://api.giphy.com/v1/gifs/random?api_key=2WPXFgfmjh0s7kMycJ7HJtoBdQq7ed2F";
  request.get(url, (err, response, body) => {
    if(err) { console.error(err) }

    body = JSON.parse(body);

    // Add this line to get the .gif's URL from the Giphy response body:
    const imgUrl = body.data.image_url

    // And pass it to our view as imgUrl:
    res.render('index', { title: 'Make School Giphy', imgUrl: imgUrl });
  });
});

router.get('/search', function(req, res, next) {
  res.render('search');
});

router.post('/search', function(req, res, next) {
  const query = req.body['giphy-query'];
  const url = `http://api.giphy.com/v1/gifs/search?api_key=2WPXFgfmjh0s7kMycJ7HJtoBdQq7ed2F&q=${query}`;

  request.get(url, (err, response, body) => {
    if(err) { console.error(err); }

    body = JSON.parse(body);

    const randomResult = body.data[Math.floor(Math.random() * body.data.length)];
    const searchResultUrl = randomResult.images.fixed_height.url;

    res.render('search', { searchResultUrl: searchResultUrl });
  });
});

module.exports = router;
