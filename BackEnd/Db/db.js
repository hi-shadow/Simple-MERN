const mongoose = require("mongoose")
const DB = "mongodb+srv://hi-shadow:shadowsmongodb@cluster0.j8hjafc.mongodb.net/MERN_Simple?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => { console.log("Connection Successful    ") }).catch((error) => { console.log("Connection Failed : " + error) })






