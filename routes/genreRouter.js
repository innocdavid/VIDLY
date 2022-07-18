// modules
const Joi = require('joi');
const express = require('express');
const router = express.Router();

// creating genres
const genres = [
  {id: 1, name: 'Action'},
  {id: 2, name: 'Romance'},
  {id: 3, name: 'Sci-Fi'},
  {id: 4, name: 'Horror'},
  {id: 5, name: 'Fantasy'},
  {id: 6, name: 'Crime'},
  {id: 7, name: 'Sport'},
  {id: 8, name: 'Animated'},
];

//setting up routes
router.get('/', (req, res) => {
  res.send('Welcome, Movie Homepage');
});

// list all genres
router.get('/', (req, res) => {
  res.send(genres)
});

// posting a new genre
router.post('/', (req, res) => {
  // validation
  const { error } = validateGenres(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  }

  genres.push(genre);
  res.send(genre);
});

// getting a single genre
router.get('/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(`genre with given id ${req.params.id} not found`);
  res.send(genre);
});

// update a genre
router.put('/', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(`genre with given id ${req.params.id} not found`);  

  const { error } = validateGenres(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

// delete a genre
router.delete('/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send(`genre with given id ${req.params.id} not found`);

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  
  res.send(genre);
});

// schema validation
function validateGenres(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  return schema.validate(genre);
}

// exporting routes
module.exports = router;