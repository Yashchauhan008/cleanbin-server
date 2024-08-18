const express = require('express');
const router = express.Router();
const userController = require('../controllers/User.controller');  // Adjust the path as needed
const { validateUser } = require('../utils/userValidation');

router.post('/add', validateUser, userController.addUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
