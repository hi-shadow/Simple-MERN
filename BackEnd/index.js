const express = require("express")
const mongoose = require("./Db/db")
const User = require("./Models/users")
const app = express();
const port = process.env.PORT || 8000

app.use(express.json())


const middleware = (req, res, next) => {
    console.log("hello from middleware")
    next()
}

app.get("/", require("./router/Auth"))
app.post("/SignUp", require("./router/SignUp"))
app.post("/SignIn", require("./router/SignIn"))


app.listen(port, () => {
    console.log(`app listing on http://localhost:${port}`)
})