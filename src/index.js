// slack app to monitor uptime

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }


