const express = require('express');
const cors = require('cors');
const routesLogin = require('./routes/login.routes');
const routesCountries = require('./routes/countries.routes');

require('dotenv').config({ path: '../.env' });

const app = express();

// Middlewares
app.use(cors());
// Middleware para procesar JSON (no necesitas bodyParser.json() si usas express.json())
app.use(express.json());

// Middleware para procesar datos x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/login', routesLogin);
app.use('/countries', routesCountries);
// app.use('/users', require('./routes/users'));
// app.use('/currencies', require('./routes/currencies'));

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));