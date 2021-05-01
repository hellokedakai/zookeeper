// const fs = require('fs');
// const path = require('path');
// const { animals } = require('./data/animals.json');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/apiRoutes');


app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});

