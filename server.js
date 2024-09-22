require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index', { result: null });
});

// Handle the WHOIS lookup
app.get('/whois', async (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).json({ error: 'Please provide a domain name' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: `https://whois40.p.rapidapi.com/whois?q=${domain}`,
      headers: {
        'X-RapidAPI-Key': process.env.WHOIS_API_KEY,
        'X-RapidAPI-Host': 'whois40.p.rapidapi.com',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching WHOIS data' });
  }
});

// Handle the Hosting lookup
app.get('/lookup', async (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.render('index', { result: 'Please provide a domain name' });
  }

  try {
    const response = await axios({
      method: 'GET',
      url: `https://ipwhois.app/json/${domain}`,
    });

    const whoisData = response.data;
    res.render('index', { result: whoisData });
  } catch (error) {
    console.error(error);
    res.render('index', { result: 'Error fetching data' });
  }
});


app.use((req, res) => {
  const ip = req.ip; 
  res.status(404).render('404', { ip: ip }); 
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
