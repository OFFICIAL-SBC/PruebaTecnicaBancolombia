import { Request, Response, query } from "express";
const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'user', password: 'password' },
];

export const postUserLogged = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
