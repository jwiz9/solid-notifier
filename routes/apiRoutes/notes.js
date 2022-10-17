const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const notes = require('../../db/db.json');
const {createNewNote, deleteNote} = require('../../lib/notes');

router.get('/notes', (req, res) => {
  let results = notes;

  res.json(results);
});

router.post('/notes', (req, res) => {
  // ID set to a unique string using the UUID package
  req.body.id = uuidv4();

  // Creates new note to notes array and write it to db.json file
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  // ID of note that can be deleted
  const id = req.params.id;

  deleteNote(id, notes);

  res.send(true);
});

module.exports = router;