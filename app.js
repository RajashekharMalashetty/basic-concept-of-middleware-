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


const checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) =>{ 
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page")
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    console.log("------ERROR------");
    next(err);
});

// //logger 
// app.use((req, res, next) => {
//     req.time  = Date.now();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });
//404
app.use((req, res) => {
    res.send("Page not found");
});
app.listen(8080, () => {
    console.log("Server listening to port 8080");
});