const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');

// Bring in my bodyParser 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// Test MongoDB
mongoose.connect(db)
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config 
require('./config/passport')(passport);

app .get('/', (req, res) => res.send('Hello'));

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = 5005;
app.listen(port, () => console.log(`server is running on port ${port}`));