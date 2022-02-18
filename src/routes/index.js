const { Router } = require('express');
const router = Router();
const user = require('./../models/user');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API of Deevy',
        status: 'success',
        author: 'Bryan Herrera',
        girhub: 'https://github.com/Bryan-Herrera-DEV/'
    });
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const userN = new user({ email, password });
    await userN.save()
    const token = jwt.sign({ _id: userN._id }, process.env.secret_key);
    res.status(200).json({ token });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userN = await user.findOne({ email });

    if (!userN) return res.status(401).send('Invalid email or password');
    if (userN.password !== password) return res.status(401).send('Invalid email or password');

    const token = jwt.sign({ _id: userN._id }, process.env.secret_key);
    res.status(200).json({ token });
});

module.exports = router;