const pool = require('../config/database');

exports.getUserByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  const [rows] = await pool.execute(query, [username]);
  return rows[0];
};
