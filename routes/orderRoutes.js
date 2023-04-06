const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  getAllOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  getCurrentUserOrders,
} = require('../controllers/orderController');

router
  .route('/')
  .post(authenticateUser, createOrder)
  .get([authenticateUser, authorizePermissions('admin')], getAllOrders);

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);
router
  .route('/:id')
  .patch(authenticateUser, updateOrder)
  .get(authenticateUser, getSingleOrder);

module.exports = router;
