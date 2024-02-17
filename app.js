const express = require('express');
const voitureroute = require ('./routes/voitures')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/voiture',voitureroute)
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  