import express from 'express';
import cors from 'cors';
import { json } from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.post('/receive-otp', (req, res) => {
  const { otpData } = req.body;

  if (!otpData || !Array.isArray(otpData) || otpData.length === 0) {
    return res.status(400).json({ message: 'Invalid or missing OTP data' });
  }

  console.log('Received OTP Data:', otpData);
  otpData.forEach(otpEntry => {
    const { otp, address } = otpEntry;
    console.log(`OTP: ${otp} from: ${address}`);
  });

  res.status(200).json({ message: 'OTPs received and processed successfully' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 