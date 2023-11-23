const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://olatomeewa:JMVgK5Znyxt4ox3L@cluster0.9m7zte3.mongodb.net/")
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true 
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("LoginCollection",LogInSchema)

module.exports = collection