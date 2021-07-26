import 'regenerator-runtime/runtime';
import express from 'express';
import fs from 'fs/promises';

const productos = [
	{
      title: 'Adidas', 
      price: '$ 3.290', 
      thumbnail: 'http://disva.com.uy/assets/gun/productos/p1.jpg',
      id:1
  },
  {
      title: 'Vans', 
      price: '$ 3.490', 
      thumbnail: 'http://disva.com.uy/assets/gun/productos/p2.jpg',
      id:2
  },
  {
      title: 'Converse', 
      price: '$ 4.890', 
      thumbnail: 'http://disva.com.uy/assets/gun/productos/p3.jpg',
      id:3
  }
];

const port = 8080;
const app = express();

const server = app.listen(port, () => {
	console.log(`Servidor en ejecución en el puerto ${port}`);
});

server.on('error', (err) => {
	console.log(`Ataje el error: ${err}`);
});

let visitas1 = 0;
let visitas2 = 0;

app.get('/', (req, res) => {
	visitas1++;
	res.send(`Visita las rutas:<br><br> <a href=/items>Items</a><br><br> <a href=/item-random>item-random</a><br><br> <a href=/visitas>visitas</a>`);
});

app.set('json spaces', 2);

app.get('/items', (req, res) => {
	visitas1++;
	res.json({
		items: productos,
		cantidad: productos.length,
	});
});

app.get('/item-random', async (req, res) => {
	try {
		visitas2++;
		const readedFile = await fs.readFile('./productos.txt', 'utf-8');
		const jsonParse = JSON.parse(readedFile);
		const randomProduct =
			jsonParse[Math.floor(Math.random() * jsonParse.length)];
		res.json({
			item: randomProduct,
		});
	} catch (error) {
		console.log(error);
	}
});

app.get('/visitas', (req, res) => {
	res.json({
		visitas: {
			items: visitas1,
			item: visitas2,
		},
	});
});