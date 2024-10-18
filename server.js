import express from 'express';
import cors from 'cors';
import { json } from 'express';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.post('/receive-otp', (req, res) => {
  const { otpData } = req.body;

  // Check if otpData is valid
  if (!otpData || typeof otpData !== 'object' || !otpData.bankName || !otpData.otp) {
    return res.status(400).json({ message: 'Invalid or missing OTP data' });
  }
  const { bankName, otp } = otpData;
  res.status(200).json({ message: 'OTP received and processed successfully' });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
