require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const uri =  process.env.MONGO_URL;

const app = express();


app.listen(process.env.PORT || 5000, () => {
    console.log("App Started!");
    mongoose.connect(uri)
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((err) => {
        console.log(err);
        console.log("DB Connection Failed!")
    })
})