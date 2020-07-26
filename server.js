const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(userRoutes);


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Sending JSON on the home route!'
    });
});

app.get('/instructor', (req, res) => {
    res.json({ 
        name: 'Mikey'
    });
});

app.get('/secret', (req, res) => {
    res.status(401).json( { 
        message: 'Unauthorized'
    });
});

app.get('/instructor/:firstName', (req, res) => {
    return res.send(`The name of this instructor is ${req.params.firstName}`);
});

app.listen(PORT, () => {
    console.log(`express-js-demo server.js listening on ${PORT}`);
});