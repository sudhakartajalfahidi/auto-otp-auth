const otpModel = require('../models/otpModel');

exports.receiveOtp = async (req, res) => {
  const { otp } = req.body;
  try {
    await otpModel.storeOtp(req.user.id, otp);
    console.log(`Received OTP for user ID ${req.user.id}: ${otp}`);
    res.json({ message: 'OTP received and stored successfully' });
  } catch (error) {
    console.error('Error receiving OTP:', error);
    res.status(500).json({ error: 'Failed to process OTP' });
  }
};

exports.verifyOtp = async (req, res) => {
  const { otp } = req.body;
  try {
    const isValid = await otpModel.verifyOtp(req.user.id, otp);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    await otpModel.deleteOtp(req.user.id, otp);
    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
};
