const express = require("express");
const app = express()

// app.use( (req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next()
// });

// app.use( (req, res, next) => {
//     console.log("Hi, I am 2st middleware");
//     next()
// });


app.use("/" ,(req, res, next) => {
    console.log("I am only for random");
    next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page")
});

//logger 
app.use((req, res, next) => {
    req.time  = Date.now();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});
//404
app.use((req, res) => {
    res.send("Page not found");
});
app.listen(8080, () => {
    console.log("Server listening to port 8080");
});