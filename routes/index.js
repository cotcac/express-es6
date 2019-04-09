var express = require('express');
var router = express.Router();
const Users = require('../controllers/User_class');

const userA = new Users();

router.get('/', userA.insert)
router.get('/single', userA.single)

module.exports = router;
