//Init
const express = require("express");
const app = express();


//Application Function
//User Welcome Message
app.get("/", function(request, response) {
    response.send("Hello, welcome to ContactsApp!");
});


//Contacts List
app.get("/contacts", function(request, response) {
    response.send("Welcome to the listing page!");
});

//Contacts Details
app.get("/contacts/:id", function(request, response) {
    response.send(`You are viewing details ${request.params.id}`);
});


//Server Port
app.listen(8888, function() {
    console.log("Your express app is running at http://localhost:8888");
});