// Import express & mongoose & others
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');
const bodyParser = require('body-parser');

// Create an instance of express()
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Db config 
const db = require('./config/keys').mongoURI;

// Test MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config 
require('./config/passport')(passport);

// Create the first route.
app.get('/', (req, res) => res.send('Hello World'));

// Add few more routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Create a port
const port = 5005;

// Listen on the port.
app.listen(port, () => console.log(`Server is running on port ${port}`))