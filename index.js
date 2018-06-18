//Init Express.js
const express = require("express");
const app = express();
const expressHbs = require("express-handlebars");

app.engine(".hbs", expressHbs({defaultLayout: "layout", extname: ".hbs"}));
app.set("view engine", ".hbs");

//Init Contacts Data
const contacts = require("./contacts.json");


//Application Function
//User Welcome Message
app.get("/", function(request, response) {
    response.render("home", {
        message: "ContactsApp"
    });
});


//Contacts List
//User Data
app.get("/contacts", function(request, response) {
    response.render("contacts-list", {
        contactsArray: contacts.users
    });
});

//User IDs
app.get("/contacts/:id", function(request, response) {
    let id = request.params.id;
    let contact = contacts.users.find(function(user) {
        return user.id === id;
    });
    if (!contact) {
        contact = "User does not exist!";
    }
    else {response.send(contact)};
});

//Contacts Details
app.get("/contacts/:id", function(request, response) {
    response.send(`You are viewing details ${request.params.id}`);
});


//Server Port
app.listen(8888, function() {
    console.log("Your express app is running at http://localhost:8888");
});