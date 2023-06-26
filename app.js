// Importar variables de entorno
require('dotenv').config();
// Express crea una app y se almacena en la variable app
const express = require('express');
const app = express();
// Utilizar mongo
const mongoose = require('mongoose');
const  path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const contactsRouter = require('./controllers/contacts');
const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');

// Función anonima que se ejecuta para conectar la base de datos
( async () => {
  // Conectar la base de datos mediante la url y comprobar si hay o no hay errores
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a Mongo DB');
  } catch (error) {
    console.log('No conecto a Mongo DB');
    console.log(error);
  }

})();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Rutas frontend
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/styles', express.static(path.resolve('views', 'styles')));
app.use('/img', express.static(path.resolve('img')));
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));
app.use('/contacts', express.static(path.resolve('views', 'contacts')));


// Rutas backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/contacts', userExtractor ,contactsRouter);

app.use(morgan('tiny'));

module.exports = app;