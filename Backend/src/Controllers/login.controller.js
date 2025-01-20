const jwt = require('jsonwebtoken');

const users = [
  { id: 1, username: 'sebastian', password: 'sebastian' },
  { id: 2, username: 'pablo', password: 'pablo' },
];

const postUserLogged = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
    res.json({ token, username: user.username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { postUserLogged };
