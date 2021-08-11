// const express = require("express"); 
// const mongoose = require("mongoose");
// const bookRoute = require("./routes/books")
// const app = express();
// const cors = require('cors');

// const dbURI = "mongodb://localhost/authentication";

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());
// app.use('/api/book' , bookRoute);


// mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;

// db.on("error", (err)=> {console.error(err)});

// db.once("open", ()=>{console.log("DB started successfully")});

// app.listen(8000, ()=>{console.log("Server started : 8000")});



let express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser');

let apiRoutes = require("./routes")

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/restApiDB", {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

const PORT = process.env.port || 3000;

app.get('/', function(req, res){
    res.send("Express is running successfully!");
});

app.use('/api', apiRoutes);

app.listen(PORT, function () {
    console.log("Server has started on port " + PORT);
});