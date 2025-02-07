const express = require('express');
const session = require('express-session');
const {sequelize} = require('sequelize');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models/index');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use('/', userRoutes);

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