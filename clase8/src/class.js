export let productos = [
  {
    title: "Adidas", 
    price: 3290, 
    thumbnail: "http://disva.com.uy/assets/gun/productos/p1.jpg",
    id: 1
},
{
    title: "Vans", 
    price: 3490, 
    thumbnail: "http://disva.com.uy/assets/gun/productos/p2.jpg",
    id: 2
},
{
    title: "Converse", 
    price: 4890, 
    thumbnail: "http://disva.com.uy/assets/gun/productos/p3.jpg",
    id: 3
},
];

export class Producto {
  constructor(title, price, thumbnail, id) {
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }

  read(array) {
    return array;
  }

  write(array) {
    productos.push({
      id: product.length + 1,
      title: array.title,
      price: array.price,
      thumbnail: array.thumbnail,
    });
  }

  delete(id) {
    productos.splice(id - 1, 1);
  }
}
