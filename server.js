const express = require('express');
const app = express();


app .get('/', (req, res) => res.send('Hello'));
const port = 5005
app.listen(port, () => console.log(`server is running on port ${port}`));