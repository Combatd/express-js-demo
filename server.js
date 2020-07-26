const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send("Hello World!")
});

app.get('/instructor/:firstName', (req, res) => {
    return res.send(`The name of this instructor is ${req.params.firstName}`);
});

app.listen(PORT, () => {
    console.log(`express-js-demo server.js listening on ${PORT}`);
});