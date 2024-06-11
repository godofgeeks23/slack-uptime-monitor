// slack app to monitor uptime

const express = require('express');
const axios = require('axios');

const port;

const PORT = process.env.PORT || 3000;
const app = express();