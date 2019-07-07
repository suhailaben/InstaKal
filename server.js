const express = require('express');
const users = require('./routes/api/users')
const posts = requite('./routes/api/post')

// Bring in my bodyParser 
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');

//DB config
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app .get('/', (req, res) => res.send('Hello'));

app.use('/api/users', users);
app.use('/api/posts', posts)
const port = 5005
app.listen(port, () => console.log(`server is running on port ${port}`));