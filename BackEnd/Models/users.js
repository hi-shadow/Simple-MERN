const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true

    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },

    Active: {
        type: Boolean,
        default: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})



userSchema.pre('save', async function (next) {
    if (this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 12)
    }
    next()
})

userSchema.methods.generateAuthToken = async function () {

    try {

        let token = jwt.sign({ _id: this._id }, "HI_SHADOW")
        this.Tokens = await this.Tokens.concat({ token: token })
        const result = await this.save()
        return result;
    } catch (error) {
        console.log(error)
    }

}
const User = mongoose.model("user", userSchema)
module.exports = User 