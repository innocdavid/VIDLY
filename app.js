// modules
const express = require('express');
require('dotenv').config();
const app = express();


// MIDDLEWARE
app.use(express.json());

// setting routes
const genRoute = require('./routes/genreRouter');

// using routes
app.use('/', genRoute);

// data
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;
// server
app.listen(port, hostname, () => {
  if (process.env.NODE_ENV !== 'test') console.log(`server running at ${hostname}://${port}`);
})