const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require('../config/dev')

router.post('/login', async function(req, res) {
    const email = req.body.email
    const password = req.body.password

    if (!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
    }
    if (!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
    }

    try {
        foundUser = await User.findOne({email})
        if (!foundUser) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'User is not exist!'}]})
        }
        if (!foundUser.hasSamePassword(password)) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'Incorrect password!'}]})
        }
    } catch (err) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Someting went wrong!'}]})
    }

    const token = jwt.sign({
        userId: foundUser.id,
        username: foundUser.username,
      }, config.SECRET, { expiresIn: '1h' });

    return res.json(token)
})

router.post('/register', async function(req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if (!username) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill username!'}]})
    }
    if (!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
    }
    if (!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
    }
    if (password !== confirmPassword) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please check password!'}]})
    }

    try {
        foundUser = await User.findOne({email})
        if (foundUser) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'User already exist!'}]})
        }
    } catch (err) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Someting went wrong!'}]})
    }

    const user = new User({username, email, password})

    try {
        await user.save()
        return res.json({"registerd": true})
    } catch (err) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Someting went wrong!'}]})
    }
})

module.exports = router