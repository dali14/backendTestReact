const express = require('express');
const cors = require('cors');
const User = require('../models/User');

const {
    allUser,
    createUser,
    updateUser,
    getUsersByIds
} = require('../controllers/userController');
const router = express.Router();


//define a route

/* router.get('/alluser',async (req, res) => {
    try {
        const users = await allUser();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}); */
router.get('/allUser',allUser);
router.get('/:id',getUsersByIds);
router.post('/',createUser);
router.put('/:id',updateUser);
module.exports = router;

