//import http from 'http';
const http = require('http')

const obtenerDatos = () => {

let max = 10,
    min = 1,
    numeroId = Math.floor(Math.random() * (max - min + 1) + min);
let numeroProducto = Math.floor(Math.random() * (max - min + 1) + min);
let numeroFoto = Math.floor(Math.random() * (max - min + 1) + min);
    
let numeroPrecio = (Math.random() * (9999.99 - 1.00 + 1.00) + 1.00).toFixed(2);

const obj = 
{
  id: numeroId, 
  title: `Producto ${numeroProducto}`, 
  price: `${numeroPrecio}`,
  thumbail: `Foto ${numeroFoto}`
};

const myJSON = JSON.stringify(obj);
//console.log(obj);
let msg = myJSON;


  return msg;

};

const server = http.createServer((request, response) => {
  const mensaje = obtenerDatos();
  response.end(mensaje);
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});





