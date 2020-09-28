const keys = require('./keys');
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
