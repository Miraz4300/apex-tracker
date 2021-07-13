const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();

app.listen(10829, () => {
    console.log('App is listening on port 10829!');
});