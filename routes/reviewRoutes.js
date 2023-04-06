const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authentication');
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

router.route('/').post(authenticateUser, createReview).get(getAllReviews);
router
  .route('/:id')
  .delete(authenticateUser, deleteReview)
  .patch(authenticateUser, updateReview)
  .get(getSingleReview);

module.exports = router;
