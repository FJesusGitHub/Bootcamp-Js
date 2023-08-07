//Ejercicios 1,2 y 2.2//

const product = { count: 3, price: 12.55, type: "ropa" };

let total = (product.count * product.price);

let iva;

if (product.type == "alimentacion") {
    iva = 0.1;
}
else if (product.type == "libro") {
    iva = 0.04;
}
else {
    iva = 0.21;
};


let totalConIva = total * iva + total;

console.log(product);

console.log("El total es " + total.toFixed(2) + "€");

console.log("El IVA aplicado es del " + iva.toFixed(2) * 100 + "%");

console.log("Total con el IVA aplicado: " + totalConIva.toFixed(2) + "€");




//Ejercicio Extra//

const empleado = {
    bruto: 34000,
    hijos: 2,
    pagas: 14
};

console.log(empleado)

let retencion;

if (empleado.bruto <= 12000) {
    retencion = 0
}
else if (empleado.bruto >= 12001 && empleado.bruto <= 24000) {
    retencion = 8
}
else if (empleado.bruto >= 24001 && empleado.bruto <= 34000) {
    retencion = 16
}
else if (empleado.bruto >= 34001) {
    retencion = 30
}

empleado.hijos != 0 ? retencion - 2 : retencion;

console.log("La retención es de un " + retencion + "%");

let retencionDeSueldo = (retencion * empleado.bruto / 100);

console.log("Que en € serían " + retencionDeSueldo + "€")

let netoAnual = empleado.bruto - retencionDeSueldo

console.log("Sueldo neto anual: " + netoAnual + "€")

let netoMensual = netoAnual / empleado.pagas

console.log("Sueldo neto mensual: " + netoMensual + "€")