const express = require('express');

const app = express();
const PORT =  process.env.PORT || 3000;
require('./config/db');

const userRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(userRouter);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    return next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500); // if unknown error, internal server error 500
    return res.json({
        message: err.message,
        error: app.get('env') === 'development' ? err: {} // displays in development, not production
    });
});


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