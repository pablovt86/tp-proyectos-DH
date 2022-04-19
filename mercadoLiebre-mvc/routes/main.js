let express = require('express');

let router = express.Router();
let mainController = require('../controller/mainController')


router.get('/',mainController.home)



module.exports = router