const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express(); 

app.use('/api/v1/profile', require('./routes/profile'));

// Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
 
const port = process.env.PORT || 8800;

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});