const carrito = [
    {
        id: 342,
        name: "Pincel tamaño 2",
        price: 3.5,
        count: 2,
        premium: false
    },
    {
        id: 344,
        name: "Pincel tamaño 3",
        price: 3.95,
        count: 2,
        premium: false
    },
    {
        id: 142,
        name: "Spray pintura acrílica naranja metalizado",
        price: 4.95,
        count: 4,
        premium: true
    },
    {
        id: 543,
        name: "Cesped artificial verde lima 50gr",
        price: 8.75,
        count: 3,
        premium: true
    },
    {
        id: 332,
        name: "Expositor pinceles",
        price: 20.95,
        count: 1,
        premium: false
    },
    {
        id: 587,
        name: "Musgo bosque 100gr",
        price: 12.95,
        count: 3,
        premium: true
    }
];


function listar(producto) {
    console.log("ID: " + producto.id);
    console.log("NOMBRE " + producto.name);
    console.log("PRECIO: " + producto.price);
    console.log("CANTIDAD: " + producto.count);
    console.log("PREMIUM: " + producto.premium);
};



// Listar todos los productos.

function mostrarCarrito(compra) {
    for (i = 0; i < compra.length; i++) {
        listar(compra[i]);
    };
};

mostrarCarrito(carrito)
console.log("------------------------");



// Eliminar el objeto con id 332 del carrito de la compra.

function eliminarObjeto(item, compra) {
    for (i = 0; i < compra.length; i++) {
        if (compra[i].id !== item) { listar(compra[i]) };
    };
};

eliminarObjeto(332, carrito);
console.log("------------------------");



// Calcular el total del carrito de la compra.


function calcularTotal(compra) {
    let total = 0;
    for (i = 0; i < compra.length; i++) {
        total += compra[i].price * compra[i].count;
    };
    console.log("TOTAL A PAGAR = " + total + "€");
    return total
};

calcularTotal(carrito);
console.log("------------------------");



//Filtrar por los productos que sean premium.

function filtradoPremium(compra) {
    for (i = 0; i < compra.length; i++) {
        if (compra[i].premium != false) { listar(compra[i]) };
    };
};

filtradoPremium(carrito);
console.log("------------------------");



// Si todos los productos son premium mostrar el mensaje: "Pedido sin gastos de envío", si no: "Este pedido tiene gastos de envío".

function confirmacionGastosEnvio(compra) {
    let premium = true
    for (i = 0; i < compra.length; i++) {
        if (compra[i].premium == false) {
            premium = false;
        };
    };

    if (premium != true) {
        console.log("Este pedido tiene gastos de envío");
    }

    else {
        console.log("Pedido sin gastos de envío");

    };
};

confirmacionGastosEnvio(carrito)
console.log("------------------------");



//Montarlo con HTML.

document.write("<h1>" + "MI CARRITO" + "</h1>")

function dibujaCarrito(compra) {
    let total = calcularTotal(compra);
    for (i = 0; i < compra.length; i++) {
        document.write("<h2><li>" + compra[i].name + ": " + compra[i].price + "€" + "<br></br>" + "Cantidad: " + compra[i].count + "<br></br>" + "</li></h2>")
    };
    document.write("<h1>" + "Total a pagar: " + total + " €" + "</h1>");
};

dibujaCarrito(carrito);



//Aplicar un descuento del 5% si la compra es mayor de 50 €

function aplicarDescuento(compra) {
    let total = calcularTotal(compra);
    if (total >= 50) {
        total = total * 0.95;
        document.write("<h1>" + "Total a pagar con el descuento aplicado: " + total.toFixed(2) + " €" + "</h1>");
        console.log("TOTAL A PAGAR CON DESCUENTO = " + total.toFixed(2) + "€");
    };
};

aplicarDescuento(carrito);
console.log("------------------------");