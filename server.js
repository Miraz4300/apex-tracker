const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load Environment
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});