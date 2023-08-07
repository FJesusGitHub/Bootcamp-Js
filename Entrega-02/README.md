ENUNCIADO

Variables y tipos de datos - Laboratorio
Para este laboratorio vamos a poner en práctica los conceptos que hemos dado en los módulos anteriores.

Se trata de crear una reseña para puntuar un hotel.

Objetivos:

Crear un HTML sencillo donde los siguientes campos sean completados mediante JavaScript:

Nombre del hotel.
Ubicación del hotel.
Imagen del hotel (puede ser mediante URL).
Pedir al usuario la puntuación que le da y mostrarla en el HTML.

Preguntar al usuario si quiere que su reseña sea anónima o no.

Opcionales:

Crear dos o tres hoteles y permitir al usuario que haga la reseña sobre uno de ellos.
Que la puntuación dada por el usuario sea mostrando el típico rating de estrellas.
Requisitos:

NO pueden usarse funciones, métodos o controles de flujo ya que aún no los hemos dado. Intenta pensar cómo lo harías si no tuvieras más que las herramientas que se han dado en estos dos módulos.

1. Construimos la estructura HTML
* Primero, creamos el fichero index.html

./index.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="site.css" />
  <title>Reseña hotel</title>
</head>

<body>
  <h1>Reseña hotel</h1>
  <div class="row">
    <div class="col-50">

      <div class="container">
        <div class="row">

          <div class="col-50">
            <h3 id="name-hotel">Hotel Desconocido</h3>
            <h4 id="location-hotel">Desconocida</h4>
          </div>

          <div class="col-50">
            <img class="image" id="img-hotel" src="" alt="Foto hotel">
          </div>

        </div>
      </div>
    </div>

    <div class="col-50">
      <div class="container">
        <p class="stars">Puntuación: <span id="rating"></span></p>
        <hr>
        <p>Reseña anónima <input type="checkbox" id="anonymous"></p>
      </div>
    </div>

</body>

</html>
* Agregamos un fichero de estilos site.css

./site.css

body {
  font-family: Arial, Helvetica, sans-serif;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

.col-50 {
  flex: 50%;
  padding: 16px;
  box-sizing: border-box;
}

.image {
  height: 200px;
  width: 400px;
}
2. Creamos nuestro código JavaScript
1. Completar datos esenciales del hotel
Vamos a realizar el primer objetivo que es rellenar desde JavaScript el nombre, ubicación e imagen del hotel.

* Primero eliminamos contenido que no necesitamos.

./app.js

// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Mencey",
  location: "Tenerife",
  img:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;
* Enlazamos al index.html nuestro fichero de JavaScript.

./index.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="site.css" />
  <title>Reseña hotel</title>
</head>

<body>
  <h1>Reseña hotel</h1>
  <div class="row">
    <div class="col-50">

      <div class="container">
        <div class="row">

          <div class="col-50">
            <h3 id="name-hotel">Hotel Desconocido</h3>
            <h4 id="location-hotel">Desconocida</h4>
          </div>

          <div class="col-50">
            <img class="image" id="img-hotel" src="" alt="Foto hotel">
          </div>

        </div>
      </div>
    </div>

    <div class="col-50">
      <div class="container">
        <p class="stars">Puntuación: <span id="rating"></span></p>
        <hr>
        <p>Reseña anónima <input type="checkbox" id="anonymous"></p>
      </div>
    </div>

    <script src="app.js"></script>

</body>

</html>
* Una vez comprobamos que se muestra correctamente todos los datos, vamos a por el siguiente objetivo.

2. Mostrar puntuación del usuario
Ahora se trata de preguntar al usuario qué puntuación le da y mostrarla en el campo correspondiente.

* Editamos nuestro script para introducir las sentencias necesarias. Como primera aproximación, simplemente podemos decirle que introduzca el número de estrellas que le asigna.

./app.js

// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Mencey",
  location: "Tenerife",
  img:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";
* Comprobamos que se concatena correctamente el número de estrellas. Seguimos con el último objetivo.

3. Preguntar al usuario si quiere enviar la reseña de forma anónima
En este último objetivo debemos preguntar al usuario si quiere enviar su reseña sin indicar sus datos. Imaginemos que estamos logueados en la aplicación y simplemente no queremos que aparezcan nuestros datos cuando se publique la reseña.

* Editamos nuestro script para preguntar al usuario si quiere o no enviar la reseña de forma anónima. Como sólo hay dos respuestas posibles, verdadero o falso, vamos a utilizar la función confirm() para poder obtener este resultado boolean por parte del usuario.

./app.js

// Objetivo 1 [Datos del hotel]
var hotel = {
  name: "Mencey",
  location: "Tenerife",
  img:
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
var rating = prompt("Puntuación: del 1 al 5");

document.getElementById("rating").innerHTML = rating + " estrellas";

// Objetivo 3 [Usuario anónimo]
var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;
* Comprueba que al seleccionar Aceptar se está marcando el checkbox como seleccionado.

3. Trabajo opcional
Tenemos dos tareas más como trabajo opcional. En ellas podremos hacer uso del acceso a objetos con la sintaxis de corchetes []. Recuerda que no podemos hacer uso de funciones, controles de flujo, ni similares.

1. Crear dos o tres hoteles y permitir al usuario que haga la reseña sobre uno de ellos
Primero, vamos a crear un objeto hoteles que tendrá como propiedades nuestros hoteles (puedes incluir el número de hoteles que quieras, pero con dos es suficiente para comprobar que funciona).

Recordemos que una variable tipo object podía contener como propiedades otros objetos. Así que vamos a ello:

* Creamos nuestro nuevo objeto hoteles

Recuerda que vamos a realizar el objetivo 1 de otra forma así que deberías de comentar ese código para que no te cause conflicto.

./app.jss

// var hotel = {
//   name: "Mencey",
//   location: "Tenerife",
//   img:
//     "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
// document.getElementById("location-hotel").innerHTML =
//   "Ubicado en " + hotel.location;
// document.getElementById("img-hotel").src = hotel.img;

var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};
Fíjate que los nombres de las propiedades dentro del objeto hoteles las he puesto con la primera letra en mayúsculas. Simplemente para facilitar la pregunta al usuario.

* Una vez creado el objeto, vamos a modificar el cuadro de diálogo que le mostramos al usuario para que elija uno de los dos hoteles. Su respuesta la guardaremos en una variable selectedHotel.

./app.jss

var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};
// diff
var selectedHotel = prompt(
  "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
);
// diff
El nombre que debe escribir el usuario debe coincidir con el identificador de nuestros hoteles en el objeto hoteles. Es decir, si mi propiedad Mencey la introduce el usuario en minúsculas no funcionará. Recuerda que sólo estamos utilizando lo que hemos dado. Más adelante veremos cómo controlar estos errores y otras formas más óptimas de hacer esta página.

* Ahora que tenemos la selección del usuario, vamos a utilizarla para acceder a los datos correspondientes y mostrarlos en la página.

./app.jss

var hoteles = {
  Mencey: {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  },
  Lani: {
    name: "Lani's Suites Deluxe",
    location: "Lanzarote",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
  },
};

var selectedHotel = prompt(
  "Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani",
);
// diff
document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;
// diff
Fíjate cómo estamos accediendo. Recuerda que con la sintaxis de corchete le podemos pasar un string para acceder a la propiedad. Como nuestra variable selectedHotel contiene como valor lo introducido por el usuario en forma de string, podemos usarlo para acceder a esa propiedad.

Una vez estamos en la propiedad correcta (es decir, en el primer nivel), podemos acceder a lo que tiene dentro.

// Si responde previamente Lani
hoteles[selectedHotel].name; // Lani
Esto, por debajo, es lo mismo:

hoteles["Lani"].name; // Lani
Y finalmente, esto es equivalente a:

hoteles.Lani.name; // Lani
* Comprueba que el usuario puede introducir los valores esperados y funciona. Recuerda que debe ser tal cual has llamado a la variable.

Y ahora, la última tarea opcional.

2. Que la puntuación dada por el usuario sea mostrando el típico rating de estrellas
Como no podemos usar nada que no hayamos explicado en el BootCamp, una forma de hacerlo es la siguiente:

* Editamos nuestro script con el código necesario. Recuerda que debemos comentar el código relacionado con el objetivo 2 para no crear conflictos.

./app.js

// Objetivo 2 [Puntuación del hotel]
// var rating = prompt("Puntuación: del 1 al 5");

// document.getElementById("rating").innerHTML = rating + " estrellas";

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};
Fíjate en que he creado un objeto stars donde tiene 5 propiedades. Cada propiedad tiene 5 etiquetas span con el símbolo HTML correspondiente. El &#9733; es para la estrella completa y el &#9734; para la estrella vacía.

* Ahora vamos a preguntar al usuario el número de estrellas que quiere darle al hotel. Ese dato lo guardaremos en un variable para poder usarlo después.

./app.js

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};
// diff
var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
* Y por último, utilizando la sintaxis de corchete, asignaremos la propiedad correspondiente en el HTML.

./app.js

var stars = {
  una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
// diff
document.getElementById("rating").innerHTML = stars[rating];
* Actualizamos el estilo para darle un poco de color.

./site.css

body {
  font-family: Arial, Helvetica, sans-serif;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

.col-50 {
  flex: 50%;
  padding: 16px;
  box-sizing: border-box;
}

.image {
  height: 200px;
  width: 400px;
}
/** diff */
.stars span {
  color: chocolate;
  font-size: 20px;
}
Y así hemos terminado. ¿Qué te ha parecido? ¿Lo has hecho de otra forma?
