// slack app to monitor uptime

const express = require('express');
const axios = require('axios');

const port;

const app = express();
const PORT = process.env.PORT || 3000;