ENUNCIADO

Expresiones Regulares - Laboratorio
Validar un IBAN
Un IBAN es un código internacional de cuenta bancaria, reemplaza a los número antiguos de cuenta (ccc).

Ejemplo de IBAN:

iban

En este ejercicio vamos a validar la sintáxis de un IBAN, es decir si se han informado con las letras y digitos que corresponden (no vamos a hacer un validación del digito de control, eso lo realizaremos en el módulo de algoritmos).

Caso 1

Dado este IBAN:

ES6600190020961234567890

Validar que se informa con dos letras, y los números correspondientes.
Caso 2

Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

ES6600190020961234567890

ES66 0019 0020 9612 3456 7890

Caso 3

Vamos a extraer el código de páis y el dígito de control.

Validar matrícula coche
Caso 1

Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

2021 GMD

2345-GMD

4532BDB

0320-AAA

Caso 2

Vamos a extraer por un lado la parte numérica y por otro las letras.

Opcionales
Extraer imágenes de un fichero HTML
Una utilidad divertida es implementar una aspiradora de imagenes, es decir de un HTML extraer de todos los tags img el contenido de src en ese contenido tenemos las URL a las imágenes.

Caso 1

De una sola linea extraer el contenido de src:

<img
  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>
Caso 2

De un HTML extraer todos los src de todos los objetos img:

<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
    />
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  </body>
</html>
Validar sintaxis tarjeta de crédito
En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de crédito máster card, para ello vamos a tener en cuenta:

Que una máster card tiene una longitud de 16 caracteres (numeros).
Que tiene que empezar con 50,51,52,53,54,55.
Qué lo normal es que se agrupen en conjuntos de 4 digitos.
Ejemplo:

5299 6400 0000 0000

Caso 1

Vamos a validar los siguiente formatos (todos válidos)

5299 6400 0000 0000

5299-6400-0000-0000

5299640000000000

Caso 2

Vamos a extraer cada grupo de cuatro digitos.

Si quieres saber más validaciones de tarjetas de crédito y como obtener números para probar: https://www.freeformatter.com/credit-card-number-generator-validator.html

Buscar Expresiones regulares
Antes de ponernos a implementar una expresión regular de algo estándar es buena idea buscar y ver si existen implementaciones de las que ya podemos partir.

En este ejercicio vas a buscar una serie de expresiones regulares y validar si la expresión dada es correcta:

Comprobar si una clave es fuerte o no:

Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.
Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).

Validar que un color en Hexadecimal esta bien formado.
