const express = require('express');
const cors = require('cors');
const User = require('./models/User');

const {
    allUser,
    createUser,
    updateUser,
    getUsersByIds
} = require('./controllers/userControllers');
const router = express.Router();


//define a route

router.get('/alluser',[], async (req, res) => {
    try {
        const users = await allUser();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/user/:id', [], async (req, res) => {
    try {
        const users = await getUsersByIds(req.params.id);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.post('/user', [], async (req, res) => {
    try {
        const users = await createUser(req.body);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);
router.put('/user/:id', [], async (req, res) => {
    try {
        const users = await updateUser(req.params.id, req.body);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);
module.exports = router;

