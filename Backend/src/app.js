const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { routesAuth } = require('./routes/login.routes');
const { routesCountries } = require('/routes/countries.routes');

require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', routesAuth);
app.use('/countries', routesCountries);
// app.use('/users', require('./routes/users'));
// app.use('/currencies', require('./routes/currencies'));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
