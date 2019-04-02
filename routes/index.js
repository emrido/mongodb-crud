const express = require('express');
const router = express.Router();
const BookRoute = require('./book');

router.use('/books', BookRoute);

module.exports = router