const express = require("express")
const router = express.Router()
const user = require("../Models/users")
const mongoose = require("../Db/db");
const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/SignIn", async (req, res) => {
    const { Email, Password } = req.body
    if (!Email || !Password) {
        return res.send("Inputs Cant be Blank")
    }
    else {
        const exists = await User.findOne({ Email: Email })
        if (exists) {
            const varify = await bcrypt.compare(Password, exists.Password)
            const token = await exists.generateAuthToken()
            console.log(token)

            res.cookie("jwt-toekn", token, {
                httpOnly: true,

            })
            if (varify) {
                console.log("Sign In Successfully")
                return res.status(200).send(exists.Name + " Welcome")
            }
            else {
                return res.status(400).send("Invalid Credientials")
            }
        } else {
            return res.status(404).send("Incorrect Credientials")
        }

    }

})

module.exports = router