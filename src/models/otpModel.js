const pool = require('../config/database');

exports.storeOtp = async (userId, otp) => {
  const query = 'INSERT INTO otps (user_id, otp, created_at) VALUES (?, ?, NOW())';
  await pool.execute(query, [userId, otp]);
};

exports.verifyOtp = async (userId, otp) => {
  const query = 'SELECT * FROM otps WHERE user_id = ? AND otp = ? AND created_at >= NOW() - INTERVAL 5 MINUTE';
  const [rows] = await pool.execute(query, [userId, otp]);
  return rows.length > 0;
};

exports.deleteOtp = async (userId, otp) => {
  const query = 'DELETE FROM otps WHERE user_id = ? AND otp = ?';
  await pool.execute(query, [userId, otp]);
};
