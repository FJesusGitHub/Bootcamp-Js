ENUNCIADO

Operadores y Flujos de Control - Laboratorio
Introducción
Con este ejercicio veremos como nuestro código se va ejecutando de manera secuencial, y luego veremos de manera resumida (se verá mejor en el siguiente módulo), como podemos encapsularlo mejor.

Te damos un pequeño ejemplo de como poder hacer este ejercicio.

Aquí veremos un ejemplo con un objeto que tendrá como propiedades operatorOne, operatorTwo y operationType

const arithmeticOperator = {
  operatorOne: 2,
  operatorTwo: 4,
  operationType: "sum",
};
let result = 0;

if (arithmeticOperator.operationType === "sum") {
  result = arithmeticOperator.operatorOne + arithmeticOperator.operatorTwo;
}

console.log("El resultado de la operación es " + result);
Aquí tenemos otro ejemplo algo más "complejo"

const arithmeticOperator = {
  operatorOne: 2,
  operatorTwo: 4,
  operationType: "sum",
};

let result = 0;

if (arithmeticOperator.operationType === "sum") {
  const operatorOne =
    arithmeticOperator.operatorOne >= 0 ? arithmeticOperator.operatorOne : 0;
  const operatorTwo =
    arithmeticOperator.operatorTwo >= 0 ? arithmeticOperator.operatorTwo : 0;

  result = operatorOne + operatorTwo;
}

console.log("El resultado de la operación es " + result);
Ejercicio 1 - Calculo IVA
Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto:

"alimentacion": 10%

"libro": 4%

Vamos a trabajar con la siguiente estructura de datos para representar la compra de un producto, que tiene cantidad, precio unitario, y tipo de producto:

const product = { count: 3, price: 12.55, type: "ropa" };
No se admitirán cantidades negativas (en cuyo caso se tomará como 0).

Ejercicio 2 - Calcular precio total
Vamos a crear una función getTotal que acepta por parámetro el producto, y devuelva el precio total:

NOTA: En el siguiente módulo veremos que este código ahora un poco "suelto", podemos almacenarlo en funciones, las funciones explicadas de manera muy rápida (repetimos que se verán más en detalle en el siguiente módulo), nos permiten agrupar código y poder ejecutarlo de manera muy rápida.

function greeting() {
  // aquí ponemos el código que deseamos ejecutar
  console.log("Hello everyone!!!");
}

// Usamos la función de arriba para que se ejecute
greeting();
Hay veces que las funciones necesitamos que devuelvan un resultado

function sumNumber() {
  // Para devolver un valor en una función usamos la palabra clave return
  return 2 + 2;
}

// Usamos la función de arriba para que se ejecute
var result = sumNumber(); // Ejecutamos la función y el valor que devuelve lo almacenamos en una variable

console.log(result); // 4
¿ Pero, no podriamos pasar dos números cuales quiera y que haga la suma ?. La respuesta es, si, para ello tenemos los parámetros, los parámetros son datos que le pasamos a nuestra función para que hagan una cierta funcionalidad dentro.

function sumNumber(num1, num2) {
  // A nuestra función sumNumber le hemos añadido dos parámetros, los dos parámetros corresponderán a dos datos que le
  // pasaremos a la función, OJO!!! recuerda que son datos, y que nosotros le damos el nombre que queramos
  // en caso de que yo los llamase berenjena y patata, seguiría funcionando todo bien.
  return num1 + num2;
}

// Como nuestra función recibe dos parámetros, simplemente a la hora de llamarla se los alimentamos para que los consuma
var result = sumNumber(2, 2);

console.log(result); // 4
Si el campo count es cero, getTotal debe devolver cero. Si el campo count es mayor que cero, tienes que devolver la multiplicación de count por precio Podemos estar tentados de directamente multiplicar count por price pero podríamos tener stock negativo y no nos daría cero.

Calcular el IVA

Vamos a crear una función getVat que recibe el producto y calcula el IVA (por unidad) aplicable dependiendo del tipo de producto:

Es decir:

Un producto sin IVA tiene un precio.

El precio total se saca multiplicando precio _ iva (el iva puede ser: 0.1, 0.04, 0.21).

Dependiendo del campo "type" calculamos el precio total:

Si es "alimentacion": precio _ 0.1

Si es "libro": precio _ 0.04

Si es de cualquier otro tipo: precio _ 0.21

Pista: Si lo hacemos usando if nos va a quedar algo complicado de leer, ¿podríamos usar switch? Sería buen ejercicio probar las dos aproximacines.

Ejercicio 2-2 Avanzado
Utilizando la función anterior, crearemos una para calcular el total de IVA (IVA por unidad multiplicado por cantidad):

Es decir una función que se llama getTotalVat(product) que devuelva el número de productos pedidos multiplacado por el precio con IVA.

function getTotalVat(product) {
  return product.count > 0 ? product.count \* getVat(product) : 0;
}
Mostrar resultado por consola

A partir de las funciones anteriores, vamos a crear una que recibe un producto, y realiza los calculos de total e IVA para mostrarlos por consola:

IMPORTANTE: En el video Sesión 2 - Operadores (a partir del minuto 04:50), se comenta el uso de esta función. Repetimos que en el siguiente módulo se verá de manera más detallada el funcionamiento y uso de las funciones

function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}
Extra 1: Calcular sueldo neto en nómina
Vamos a hacer una simulación de calculo de sueldo neto en nómina (este escenario es simplificado, desafío buscar legislación).

Partimos de:

Sueldo bruto año. Número de hijos. Número de pagas. Tenemos la siguiente estrcutura:

const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};
Las condiciones:

Por rango de salario:

Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
Adicionalmente:

Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.
Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)

Desafío avanzado: buscar la legislación e intentar hacer una calculadora completa.
