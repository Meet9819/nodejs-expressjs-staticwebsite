var express = require('express');
var router = express.Router();


router.get('/admission', function(req, res){

  res.render('admission', {
        pageTitle : 'Admission',
        pageID : 'admission'

    });
});

module.exports = router;