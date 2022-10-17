const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
  const newNote = body;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  // Returns finished code to post route for response
  return newNote;
};

function deleteNote(id, notes) {
  notes.forEach((note, index) => {
    if (note.id === id) {
      notes.splice(index, 1);
    };
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  return;
};

module.exports = {
  createNewNote,
  deleteNote
};