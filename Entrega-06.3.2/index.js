let arrayDinero = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
let cambio = (dinero, diferencia) => diferencia / dinero;
let tipoDinero;


var creaLista = (mensaje) => {
    var lista = document.getElementById('lista');
    var item = document.createElement('li');
    item.innerText = mensaje;
    return lista.appendChild(item);
  };


let calculo = () => {
    let total = document.getElementById("total").value;
    let pago = document.getElementById("pago").value;
    let diferencia = pago - total;
    console.log('El cambio es ' + diferencia + ' €');

    for (const dinero of arrayDinero) {
        let cuenta = cambio(dinero, diferencia);
        if (cuenta >= 1) {
            diferencia = diferencia - parseInt(cuenta) * dinero;
            dinero <= 2 ? (tipoDinero = "moneda/s") : (tipoDinero = "billete/s");

            let mensaje = parseInt(cuenta) + ' ' + tipoDinero + ' de ' + dinero + ' euros';
            creaLista(mensaje);
        };
    };
    return cambio;
};

const btn = document.getElementById("submit");
btn.addEventListener("click", calculo);



















/*







let arrayVueltas = [];
let resto = 0;

if (Math.floor(diferencia / 200) >= 1) {
    let cantidad200 = Math.floor(diferencia / 200);
    resto = diferencia - (cantidad200 * 200);
    arrayVueltas.push(cantidad200);

    console.log(cantidad200);
    console.log(arrayVueltas);
    console.log(resto);
};

if (Math.floor(resto / 100) >= 1) {
    let cantidad100 = Math.floor(resto / 100);
    resto = resto - (cantidad100 * 100);
    arrayVueltas.push(cantidad100);

    console.log(cantidad100);
    console.log(arrayVueltas);
    console.log(resto);
}

*/