const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const BASE_URI = process.env.BASE_URI || '';

router.get(`${BASE_URI}/users`, userController.getAllUsers);
router.get(`${BASE_URI}/users/:id`, userController.getUserById); 
router.post(`${BASE_URI}/users`, userController.createUser);
router.put(`${BASE_URI}/users/:id`, userController.updateUser); 
router.delete(`${BASE_URI}/users/:id`, userController.deleteUser); 

module.exports = router;
