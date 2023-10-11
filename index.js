var express = require('express'); //mount express and router before calling ejs files (html converted files)
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index');
});

/*GET ABOUT ME PAGE */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/*CONTACT ME */
router.get('/contact', function(req, res, next) {
  res.render('contact');
 
});


/*SERVICES */
router.get('/services', function(req, res, next) {
  res.render('services');
 
});

/*PROJECTS */
router.get('/projects', function(req, res, next) {
  res.render('projects');
 
});
module.exports = router;
