const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/countries', require('./routes/countries'));
app.use('/users', require('./routes/users'));
app.use('/currencies', require('./routes/currencies'));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
