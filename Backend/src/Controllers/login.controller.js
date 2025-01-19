const { Request, Response, query } = require('express');
const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'user', password: 'password' },
];

const postUserLogged = (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  const user = users.find(u => u.username === username && u.password === password);

  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { postUserLogged };
