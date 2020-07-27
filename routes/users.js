const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
/*
POST	/users	Create a user using a payload	Create
GET	/users	Display a list of users	Read
GET	/users/:id	Display a single user	Read
PATCH or PUT *	/users/:id	Edit a user using a payload	Update
DELETE	/users/:id	Delete a user	Delete
*/

router.get('/users', usersController.index);
router.get('/users/:id', usersController.showUser);
router.post('/users', usersController.createUser);
router.patch('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;