import express, { response } from "express";
import { productos } from "./class";
import { Producto } from "./class";

const app = express();
const port = 8080;
const server = app.listen(port, () => console.log("Servidor corriendo en", port));

server.on("error", (err) => {
  console.log("ERROR, problema con el servidor", err);
});

app.get("/", (req, res) => {
  res.json(
    `
	   /api/productos/listar 
       /api/productos/listar/:id 
       /api/productos/guardar/ 
	`
  );
});

app.get("/api/productos/listar", (req, res) => {
  if (productos.length == []) {
    return res.status(404).json({
      Error: "No existen productos",
    });
  }
  res.json(productos);
});

app.get("/api/productos/listar/:id", (req, res) => {
  const idSearch = req.params.id;
  const product = productos.find((idProd) => idProd.id == idSearch);

  if (!product) {
    return res.status(404).json({
      Error: "ERROR, no existe producto",
    });
  }
  res.json({
    data: product,
  });
});

app.use(express.json({type: '*/*'}));
app.use(express.urlencoded({ extended: true }));
app.post("/api/productos/guardar", (req, res) => {
  const body = req.body;
  console.log(req.body);

  if (body == {}) {
    return res.status(400).json({
      Error: "ERROR, no se agrego el producto",
    });
  }

  const newProduct={
    title:body.title,
    price:body.price,
	thumbnail:body.thumbnail,
    id:productos.length+1
  }

  productos.push(newProduct)

  res.status(201).json({
    msg: "Se agrego el producto",
    data: newProduct
  })
});
