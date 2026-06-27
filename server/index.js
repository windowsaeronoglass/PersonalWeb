import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  console.log(`[Contact] ${name} <${email}>: ${subject}`);
  console.log(`  ${message}`);

  res.json({ success: true, message: 'Message received.' });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
