const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h2> Hi Node Docker Application </h2>");
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to Port ${port}`));