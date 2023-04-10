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
    console.log(req.body);
    const str = `*********\n${new Date().toISOString()}\n${JSON.stringify(req.body)}\n\n`;
    fs.appendFile('logs.txt', str, err => {
        if (err) throw err;
        console.log(`Response logged to logs.txt`);
    });
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
