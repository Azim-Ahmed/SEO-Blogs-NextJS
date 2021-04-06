const { check } = require('express-validator')
exports.userSignUpValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage("Name is Required"),
    check('email')
        .isEmail()
        .withMessage("Must be a valid email Address"),
    check('password')
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters long")
]

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage("Must be a valid email Address"),
    check('password')
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters long")
]