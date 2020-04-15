const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 4
  },
  {
    "name": "Dan Abramov",
    "number": "1234567890",
    "id": 2
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (req, res) => console.log(`Starting Phonebook REST app`));

app.get('/api/persons', (req, res) => res.json(persons))

const port = 3001
app.listen(port, () => console.log(`listening on ${port}`))
