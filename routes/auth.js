const express = require('express');
const cors = require('cors');
const User = require('../models/User');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const { login, register } = require('../controllers/authController');
// router login 
router.post('/login', 
[
    check('email').isEmail(),
    check('password').isLength({min: 8})
], async (req, res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    try {
        const response = await login({
          email,
          password,
        });
        return res.status(!!response.activationToken ? 403 : 200).send(response);
      } catch (error) {
        next(error);
      }
}
);
/// router register
router.post('/register',
[   
    check('name').isString(),
    check('family_name').isString(),
    check('email').isEmail(),
    check('password').isLength({min: 8})
], async (req, res,next) => {
    console.log(req.body);
    const name = req.body.name;
    const family_name = req.body.family_name;
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    try {
        const response = await register({
            name,
            family_name,
            email,
            password,
        });
        return res.status(!!response.activationToken ? 403 : 200).send(response);
        } catch (error) {
        next(error);
        }
}
);

module.exports = router;