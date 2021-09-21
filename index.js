const express = require('express');

const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.send('this is a demo app')
   
});

app.get('*', (req, res)=> {
    res.status(404).send('This is an invalid URL')
})

app.listen(process.env.PORT, () => console.log('listening on port 3000'));