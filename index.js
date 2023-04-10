const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  // Process the webhook payload here
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});
