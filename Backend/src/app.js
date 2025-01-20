const express = require('express');
const cors = require('cors');
const routesLogin = require('./routes/login.routes');
const routesUser = require('./routes/user.routes');
const routesCountry = require('./routes/country.routes');

require('dotenv').config();


const app = express();

// Middlewares
app.use(cors());
// Middleware para procesar JSON (no necesitas bodyParser.json() si usas express.json())
app.use(express.json());

// Middleware para procesar datos x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/login', routesLogin);
app.use('/user', routesUser);
app.use('/country', routesCountry);
// app.use('/users', require('./routes/users'));
// app.use('/currencies', require('./routes/currencies'));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));