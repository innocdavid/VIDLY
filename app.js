// modules
require('dotenv').config();
const genRoute = require('./routes/genreRouter');
const express = require('express');
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use('/api/genres', genRoute);

// data
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

// server
app.listen(port, hostname, () => {
  if (process.env.NODE_ENV !== 'test') console.log(`server running at ${hostname}://${port}`);
})