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

router.get('/alluser',async (req, res) => {
    try {
        const users = await allUser();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/:id', [], async (req, res) => {
    try {
        const users = await getUsersByIds(req.params.id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const users = await createUser(req.body);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);
router.put('/:id', [], async (req, res) => {
    try {
        const users = await updateUser(req.params.id, req.body);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);
module.exports = router;

