const path = require('path');
const express = require('express');
const api = require('./routes/index.js')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// serve to client requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);