// Exportamos la app de express
const app = require('./app');
// Crear nuestro servidor http que viene en node
const http = require('http');
const server = http.createServer(app);

// Primer argumento es el puerto
server.listen(3003, () => {
  console.log('El servidor is running');
  console.log('Servidor : http://localhost:3003/');
  console.log('Puerto: 3003');
});

