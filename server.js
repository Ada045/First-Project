/*Load environment variables
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(express.static('public')); // Serve static files from the 'public' directory

// Endpoint to fetch products from AliExpress
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://api-sg.aliexpress.com/sync', {
      headers: {
        'Authorization': `Bearer ${process.env.ALIEXPRESS_API_KEY}:${process.env.ALIEXPRESS_API_SECRET}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
