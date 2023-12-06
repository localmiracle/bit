const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/bitcoin_price_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const priceSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  price: Number,
});

const Price = mongoose.model('Price', priceSchema);

app.get('/fetchBitcoinPrice', async (req, res) => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    const price = response.data.bpi.USD.rate_float;
    const newPrice = new Price({ price });
    await newPrice.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
