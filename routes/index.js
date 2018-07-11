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
  res.render(search);
});

router.post('/search', function(req, res, next) {
  console.log(req.body);
  res.status(204).send({});
});

module.exports = router;
