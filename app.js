const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const app = express()

app.use(express.json())
app.use('/User', router)

mongoose.connect("mongodb+srv://chibuzornworie85:AL1uZlt7Cqz4Thcy@cluster0.y7lhudh.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(5000, ()=>{
        console.log("connected successfully");
    })
}).catch((err)=>{
    console.log(err);
})