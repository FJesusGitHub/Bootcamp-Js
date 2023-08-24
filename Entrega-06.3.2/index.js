const dinero = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const boton = document.getElementById("btn");
const lista = document.getElementById('lista');

let calcular = () => {
  let total = document.getElementById('total').value;
  let entregado = document.getElementById('entregado').value;
  let vueltas = entregado - total;
  for (const din of dinero) {
    let cantidadDinero = parseInt(vueltas / din)
    if (cantidadDinero >= 1) {
      vueltas = vueltas - cantidadDinero * din;
      let tipo;
      din <= 2 ? (tipo = "moneda/s") : (tipo = "billete/s");
      let li = document.createElement('li');
      li.innerText = cantidadDinero + ' ' + tipo + ' de ' + din + ' euros'
      lista.appendChild(li);
    };
  };
};

boton.addEventListener('click', calcular);