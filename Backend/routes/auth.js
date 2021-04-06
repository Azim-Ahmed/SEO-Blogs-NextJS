const express = require('express')
const router = express.Router()
const { signup, signin, signout, requireSignin, } = require('../controllers/auth')

//validators
const { runValidation } = require('../validators')
const { userSignUpValidator, userSigninValidator } = require('../validators/auth')

router.post('/signup', userSignUpValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.get('/signout', signout)


//test of requireSignin middleware ,
router.get('/secret', requireSignin, (req, res) => {
    res.json({
        message: "You have accessed "
    })
})

module.exports = router