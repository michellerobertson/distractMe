const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Apply CORS middleware
app.use(cors({ origin: CORS_ORIGIN }));

app.use(express.json());

// Route to fetch facts
app.get('/api/facts', async (req, res) => {
  try {
      const response = await axios.get('https://api.api-ninjas.com/v1/facts', {
          headers: {
              'X-Api-Key': process.env.API_KEY
          }
      });
      const facts = response.data;
      res.json(facts);
  } catch (error) {
      console.error('Error fetching facts:', error);
      res.status(500).json({ message: 'Error fetching facts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});