const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
});
app.get('/works', (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
});
app.get('/images', (req, res) => {
    res.sendFile(__dirname + "/views/images.html")
});
app.listen(3000, () => {
    console.log("escuchando server!")
});