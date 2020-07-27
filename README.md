# express-js-demo
This repository is a demo respository to show off the capabilities of the MongoDB, Express, JavaScript (EJS), and Node.js stack.

## Learning Goals
* Understand what express.js is and how to create a simple application
* Listen for requests and send responses using express
* Collect data from a URL using request.params
* Understand how to respond with JSON
* Include built-in express middleware to collect form values and request information
* Move routing logic into a separate file using the express router
* Use the express router to refactor routing code
* Install Mongo and start a Mongo Server
* Perform CRUD operations in a Mongo console

### Controllers

```
/*
POST	/users	Create a user using a payload	Create
GET	/users	Display a list of users	Read
GET	/users/:id	Display a single user	Read
PATCH or PUT *	/users/:id	Edit a user using a payload	Update
DELETE	/users/:id	Delete a user	Delete
*/
```