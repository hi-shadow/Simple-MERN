const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hello From the Router")
})

module.exports = router