// modules
import * as dotenv from 'dotenv';
dotenv.config()
import express from "express";
import genRoute from "./routes/genreRouter.js";
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/genres', genRoute);

// PORT
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

// server
app.listen(port, hostname, () => {
  if (process.env.NODE_ENV !== 'test') console.log(`server running at ${hostname}:${port}`);
})