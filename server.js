const express = require('express');
const users = require('./routes/api/users')

// Bring in my bodyParser 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app .get('/', (req, res) => res.send('Hello'));

app.use('/api/users', users);

const port = 5005
app.listen(port, () => console.log(`server is running on port ${port}`));