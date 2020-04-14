const http = require('http');
const express = require('express');
const app = express();

app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/', (req, res) => res.send(`<h1>Hello world!</h1>`));

app.get('/api/notes'), (req, res) => res.json(notes);

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const note = notes.find(note => {
    console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id = id
  });
  console.log(note);
  note
    ? res.json(note)
    : res.status(202).end();
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find(note => note.id === id);

  res.status(204).end();
})

const generateID = () => {
  const maxID = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxID + 1;
}

app.post('/api/notes', (req, res) => {
  const body = req.body;
  console.log(body);
  (!body.content) && res.status(400).json({ error: 'content missing' })
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateID(),
  }

  notes = notes.concat(note);
  res.json(note);
})

const port = 3001;
app.listen(port, () => console.log(`server running on port ${port}`))
