var express = require('express');
var router = express.Router();
const Users = require('./User_class');

const userA = new Users();

router.get('/insert', userA.insert)
router.get('/single', userA.single)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
