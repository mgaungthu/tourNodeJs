const express = require('express');
const userController = require('./../controllers/userController');
const authContoller = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(authContoller.signup);

router.route('/login').post(authContoller.login);

router.route('/forgotpassword').post(authContoller.forgotPassword);

router.route('/resetpassword').post(authContoller.resetPassword);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
