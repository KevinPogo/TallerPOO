class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }
}

const inventario = [
    new Producto('Manzana', 1.2, 15),
    new Electrodomestico('Lavadora', 300, 5, 'LG'),
    new Electrodomestico('Refrigerador', 500, 8, 'Samsung'),
    new Producto('Plátano', 0.5, 20),
    new Electrodomestico('Microondas', 150, 12, 'Panasonic'),
    new Electrodomestico('Secadora', 400, 3, 'Bosch')
];

function listarBajoStock(inventario) {
    const bajoStock = inventario.filter(producto => producto.cantidadEnStock < 10);
    return bajoStock;
}

const productosBajoStock = listarBajoStock(inventario);

console.log('Productos con cantidad en stock menor a 10:');
productosBajoStock.forEach(producto => {
    console.log(`${producto.nombre} - Cantidad en stock: ${producto.cantidadEnStock}`);
});
