import express from "express";
import { productos } from "../class";
const router = express.Router();

router.get("/listar", (req, res) => {
  if (productos.length == []) {
    return res.status(404).json({
      Error: "No hay productos en la lista",
    });
  }
  res.json(productos);
});

router.get("/listar/:id", (req, res) => {
  const idSearch = req.params.id;
  const product = productos.find((idProd) => idProd.id == idSearch);

  if (!product) {
    return res.status(404).json({
      Error: "ERROR, producto no encontrado",
    });
  }
  res.json({
    data: product,
  });
});

router.post("/guardar", (req, res) => {
  const body = req.body;
  console.log(req.body);

  if (body == {}) {
    return res.status(400).json({
      Error: "ERROR, no se agrego el producto",
    });
  }

  const newProduct = {
    title: body.title,
    price: body.price,
    thumbnail: body.thumbnail,
    id: productos.length + 1,
  };

  productos.push(newProduct);

  res.status(201).json({
    msg: "OK, se agrego un producto nuevo",
    data: newProduct,
  });
});

router.put("/actualizar/:id", (req, res) => {
  const idActualizar = parseInt(req.params.id);
  const body = req.body;
  const idProductos = productos.findIndex((index) => index.id == idActualizar);

  if (idProductos != -1) {
    productos.splice(idProductos, 1, body);
  } else {
    return res.status(400).json({
      Error: "ERROR, el ID no existe",
      idActualizar,
    });
  }
  res.status(201).json({
    msg: "OK, se actualizo el producto",
    data: body,
    productos,
  });
});

router.delete("/borrar/:id", (req, res) => {
  const idBorrar = parseInt(req.params.id);
  const idProductos = productos.findIndex((index) => index.id == idBorrar);

  if (idProductos != -1) {
    productos.splice(idProductos, 1);
  } else {
    return res.status(400).json({
      Error: "ERROR, el ID no existe",
      idBorrar,
    });
  }
  res.status(201).json({
    msg: "OK, se borro el producto",
    data: productos,
  });
});

export default router;
