const express = require('express');

const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('this is a demo app')   
});

app.listen(process.env.PORT, () => console.log('listening on port 3000'));