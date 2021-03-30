var express = require('express');
var router = express.Router();


router.get('/courses', function(req, res){

  res.render('courses', {
        pageTitle : 'Courses',
        pageID : 'courses'

    });
});

module.exports = router;