const express = require('express');
var cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const corsOptions = {
    origin: "*",
    "methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: 'Origin, Content-Type, X-Auth-Token'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    console.log("pong");
    res.json({ping: "pong"});
});

app.post('/save-video', (req, res) => {
    console.log(req.body);
    fs.readFile('db.json', function read(err, data) {
        content = data;
    });
    return res.status(200)
});

function processFile() {
    console.log(content)
}

app.listen(port, () => console.log(`listening on port ${port}!`))