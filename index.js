const express = require("express"); 
const mongoose = require("mongoose");
const bookRoute = require("./routes/books")
const app = express();
const cors = require('cors');

const dbURI = "mongodb://localhost/authentication";

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api/book' , bookRoute);


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", (err)=> {console.error(err)});

db.once("open", ()=>{console.log("DB started successfully")});

app.listen(8000, ()=>{console.log("Server started : 8000")});
