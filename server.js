const express = require('express');
const app = express();
const mongoose = require('mongoose');

//DB config
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.log(err));


app .get('/', (req, res) => res.send('Hello'));
const port = 5005
app.listen(port, () => console.log(`server is running on port ${port}`));