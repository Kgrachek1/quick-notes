const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')


// All paths start with '/notes'

//POST/notes
router.post('/new', notesCtrl.create);
router.get('/', notesCtrl.index);

module.exports = router;