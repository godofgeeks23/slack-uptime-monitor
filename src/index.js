// slack app to monitor uptime

const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const port;

const app = express();