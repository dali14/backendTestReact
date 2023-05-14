// express, cors, body-parser
const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const app = express();
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define a route 

app.use('/users', usersRouter);
app.use('/auth', authRouter);

// Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });