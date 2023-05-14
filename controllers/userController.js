const User = require('../models/User');

const allUser = (req, res) => {
    User.findAll()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
  }
const getUsersByIds = (req, res) => {
    User.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
}
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
