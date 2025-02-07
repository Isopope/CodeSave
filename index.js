const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const db = require('./models/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cookieParser());


app.use(session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Exemple de route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

db.sequelize.sync().then(() => {
    console.log('Database synchronized');
  }).catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });