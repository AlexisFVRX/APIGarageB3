const router = require('express').Router();
const carsAPIExterne = require('../controller/APIExterne');

router.get('/', carsAPIExterne.getCarsAPI); 

module.exports = router;