// modules
const express = require('express');
const router = express.Router();

//setting up routes
router.get('/', (req, res) => {
  res.send('Welcome, Movie Homepage');
});

// exporting routes
module.exports = router;