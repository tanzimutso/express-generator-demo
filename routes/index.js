var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:food', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.food === "muri") {
    res.render('index',{food : `tui ki muri khabi? ar tor host er nam ${req.hostname} tor protocol er nam ${req.protocol}
    tor ip hoilo ${req.ip}`})
  }
  // otherwise pass the control to the next middleware function in this stack
  else 
  next()
  res.render('index',{ food: "muri nai re mama" })   
})



module.exports = router;
