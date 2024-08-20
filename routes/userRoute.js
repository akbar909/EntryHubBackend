const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.createUser);
router.get('/:email', userController.getUserByEmail);
router.get('/', userController.getAllUsers);

module.exports = router;