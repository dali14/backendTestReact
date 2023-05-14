const User = require('../models/User');
const express = require('express');
const router = express.Router();

const allUser = (req, res) => {
    User.findAll()
    .then(users => {res.status(200).json(users)})
    .catch(err => res.status(500).json({ error: err.message }));
};
const getUsersByIds = (req, res) => {

    const userId = req.params.id; // Access the user ID from req.params.id
    User.findAll({
      where: {
        id: userId // Use the userId variable in the query
      }
    })
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };
const createUser = (req, res) => {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json({ error: err.message }));
  }

const updateUser = (req, res) => {
    User.update(req.body, {
    where: { id: req.params.id }
    })
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
}
module.exports = {

    allUser,
    createUser,
    updateUser,
    getUsersByIds
};
