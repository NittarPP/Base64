//https://nittarpp.github.io/api.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());


app.post('/api/base64', (req, res) => {
  const base64Data = req.body.data;
  console.log('Received Base64 data:', base64Data);

  res.send('Success');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
