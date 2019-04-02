const express = require('express');
const router = express.Router();
const BookController = require('../controller/book');

router.get('/', BookController.list);
router.post('/', BookController.add);
router.get('/:id', BookController.read);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);

module.exports = router;
