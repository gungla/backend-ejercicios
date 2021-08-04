import express from "express";
import multer from "multer";
import apiproductos from "./routes/apiproductos";

// inicio servidor

const app = express();
const port = 8080;
const server = app.listen(port, () => console.log("Servidor arriba en puerto", port));

server.on("error", (err) => {
  console.log("ERROR, en el servidor", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api/productos", apiproductos);

// Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Storage
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
