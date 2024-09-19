const express = require('express');
const otpController = require('../controllers/otpController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/receive-otp', authenticateToken, otpController.receiveOtp);
router.post('/verify-otp', authenticateToken, otpController.verifyOtp);

module.exports = router;
