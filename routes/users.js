const express = require('express');
const router = express.Router();

/*
POST	/users	Create a user using a payload	Create
GET	/users	Display a list of users	Read
GET	/users/:id	Display a single user	Read
PATCH or PUT *	/users/:id	Edit a user using a payload	Update
DELETE	/users/:id	Delete a user	Delete
*/


const users = []; // will be a database later

router.get('/users', (req, res) => {
    return res.json(users);
});

router.get('/users/:id', (req, res) => {
    const foundUser = users.find((val) => {
       val.id === Number(req.params.id);
       return res.json(user);
    });
});

router.post('/users', (req, res) => {
    users.push({
        name: req.body.name,
        id: ++id
    });
    return res.json({ message: 'Created' });
});

router.patch('/users/:id', (req, res) => {
    const updatedUser = users.find((val) => {
        val.id === Number(req.params.id);
    });
    updatedUser.name = req.body.name;
    return res.json ({ message: 'Updated' })
});

router.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex((val) => {
        val.id === Number(req.params.id);
    });
    users.splice(userIndex, 1);
    return res.json({ message: 'Deleted' });
});

module.exports = router;