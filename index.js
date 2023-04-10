const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan());
app.use(helmet());

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  // Process the webhook payload here
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});
