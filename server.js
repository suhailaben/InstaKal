// Import express & mongoose & others
const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');
const path = require('path');
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
//app.get('/', (req, res) => res.send('Hello World'));

// Add few more routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

   // deployment
if (process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('client/build'));
 
  app.get('*', (req, res) =>{
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
 } 
  
// Create a port
const port = process.env.PORT || 5004;

// Listen on the port.
app.listen(port, () => console.log(`Server is running on port ${port}`))