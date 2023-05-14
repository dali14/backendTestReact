// express, cors, body-parser
const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define a route 

app.get('/alluser', (req, res) => {
    User.findAll()
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });