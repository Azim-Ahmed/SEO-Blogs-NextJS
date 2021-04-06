const User = require('../model/user')
const shortid = require('shortid')


exports.signup = (req, res) => {
    const { name, email, password } = req.body
    // res.json({
    //     user: {
    //         name, email, password
    //     }
    // })

    User.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) {
            return res.status(400).json({ error: "Email has Taken" })
        }

        console.log(req.body);
        const { name, email, password } = req.body
        const username = shortid.generate()
        const profile = `${process.env.CLIENT_URL}/profile/${username}`
        const newUser = new User({ name, email, password, profile, username })
        console.log(newUser);
        newUser.save((error, data) => {
            if (error) {
                return res.status(400).json({ message: "something went wrong" })
            }
            if (data) {
                return res.status(201).json({
                    message: "Sign Up success! Please Sign in"
                })
            }

        })
    })


}