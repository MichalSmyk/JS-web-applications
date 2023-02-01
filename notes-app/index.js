const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

app.use(cors())

let notes = [
  'This note is coming from the server'
];

app.use(express.json());

app.get('/notes', (_req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  notes.push(req.body.content)
  res.send(JSON.stringify(notes));
});

app.delete('/notes', (req, res) => {
  notes = [];
  res.send(JSON.stringify(notes))
});

app.listen(PORT);
console.log(`Listening on ${PORT}`)