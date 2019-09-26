const express = require("express");

const app = express();

const PORT = 4040;

app.get("/", (req,res) => {
    res.send("Hello World - Node with Express");
});

app.listen(PORT, () => {
    console.log(`Hello World - Node with Express`)
});

