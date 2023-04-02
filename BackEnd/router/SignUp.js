const express = require("express")
const router = express.Router();
const user = require("../Models/users")
const mongoose = require("../Db/db");
const User = require("../Models/users");

router.post("/SignUp", async (req, res) => {
    const { Name, Email, Phone, Work, Password, CPassword } = req.body
    if (!Name || !Email || !Phone || !Work || !Password || !CPassword) {
        return res.status(422).send("Please Filled-Up Proper Fields")
    }
    const UserExists = await User.findOne({ Email })
    if (UserExists) {
        return res.status(422).send("Email Already Registered")
    }
    else {
        if (Password === CPassword) {


            const user = new User({ Name, Email, Phone, Work, Password })
            const result = await user.save()
            res.status(201).send("Registration Successful")

        } else {
            return res.status(422).send("Password And Confirm Password Are Not Matched")
        }
    }
})

module.exports = router