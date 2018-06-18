//Init
const express = require("express");
const app = express();


//Application Function
app.get("/", function (request, response) {
    response.send("Hello there.");
});

app.listen(8888, function () {
    console.log("Your express app is running at http://localhost:8888");
});