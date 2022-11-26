
const express = require("express");

const app = express.Router();

app.get("", (req, res) => {
    res.send("Product page")
})

module.exports = app;