const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipeRoutes');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.listen(port, () => {
    console.log('Listening to port: ' + port);
});