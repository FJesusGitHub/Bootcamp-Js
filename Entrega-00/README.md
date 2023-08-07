ENUNCIADO

00 Hoteles CSS laboratorio
Previo. Partimos del HTML generado en el ejercicio anterior.
./index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hoteles</title>
</head>
<body>
    <div class="hotels-container">
        <div class="hotels-header">
            <h2>Listado de Hoteles</h2>
        </div>
        <div class="hotels-body">
            <div class="hotel-item">
                <span>Nombre hotel</span>
                <span>Descripción hotel</span>
                <span>Teléfono hotel</span>
                <div class="stars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
1. Creamos un nuevo fichero site.css en el raíz dondese encuentra nuestro fichero html.
Creamos ./site.css
Editamos ./index.html, para hacer referencia al fichero creado previamente.
./index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- diff -->
    <link rel="stylesheet" href="site.css">
    <!-- diff -->
    <title>Hoteles</title>
</head>
<body>
    <div class="hotels-container">
        <div class="hotels-header">
            <h2>Listado de Hoteles</h2>
        </div>
        <div class="hotels-body">
            <div class="hotel-item">
                <span>Nombre hotel</span>
                <span>Descripción hotel</span>
                <span>Teléfono hotel</span>
                <div class="stars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
2. Vamos a crear el estilado básico para una entrada de hotel.
./site.css

body {
    font-family: Arial, Helvetica, sans-serif;
}

.hotels-header h2 {
    padding: 20px;
    text-align: center;
}

.hotels-body {
    margin: auto;
    max-width: 90%;
}

.hotel-item {
    padding: 16px;
    border-radius:2px;
    border:1px solid #9c9c9c;
    display: flex;
    justify-content: space-between;
}
3. Jugamos con las fuentes para dar mayor relevancia al texto que nos interesa.
./index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="site.css">
    <title>Hoteles</title>
</head>
<body>
    <div class="hotels-container">
        <div class="hotels-header">
            <h2>Listado de Hoteles</h2>
        </div>
        <div class="hotels-body">
            <div class="hotel-item">
                <!-- diff -->
                <span class="hotel-name">Nombre hotel</span>
                <span class="hotel-description">Descripción hotel</span>
                <span class="hotel-telephone">Teléfono hotel</span>
                <!-- diff -->
                <div class="stars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
./site.css

body {
    font-family: Arial, Helvetica, sans-serif;
}

.hotels-header h2 {
    padding: 20px;
    text-align: center;
}

.hotels-body {
    margin: auto;
    max-width: 90%;
}

.hotel-item {
    padding: 16px;
    border-radius:2px;
    border:1px solid #9c9c9c;
    display: flex;
    justify-content: space-between;
}

/* diff */
.hotel-name {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hotel-description {
    font-size: 20px;
    font-weight: 300;
}

.hotel-telephone {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
}
/* diff */
4. Por último modificamos nuestro html, para generar más entradas y tener una mejor visión de como queda nuestro diseño.
./index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="site.css">
    <title>Hoteles</title>
</head>
<body>
    <div class="hotels-container">
        <div class="hotels-header">
            <h2>Listado de Hoteles</h2>
        </div>
        <div class="hotels-body">
            <div class="hotel-item">
                <!-- diff -->
                <span class="hotel-name">Hotel Balmoral</span>
                <span class="hotel-description">Maravilloso hotel en Benalmadena, muy cerca del paseo marítimo y de los chiringuitos</span>
                <span class="hotel-telephone">+34-555-555-555</span>
                <!-- diff -->
                <div class="stars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
5. Por último para controlar el alineamiento de todos los elemntos de nuestro listado de hoteles, vamos a utilizar anchos mínimos fijos.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="site.css">
    <title>Hoteles</title>
</head>
<body>
    <div class="hotels-container">
        <div class="hotels-header">
            <h2>Listado de Hoteles</h2>
        </div>
        <div class="hotels-body">
            <div class="hotel-item">
                <!-- diff -->
                <div class="hotel-name-container">
                    <span class="hotel-name">Hotel Balmoral</span>
                </div>
                <div class="hotel-description-container">
                    <span class="hotel-description">Maravilloso hotel en Benalmadena, muy cerca del paseo marítimo y de los chiringuitos</span>
                </div>
                <div class="hotel-telephone-container">
                    <span class="hotel-telephone">+34-555-555-555</span>
                </div>
                <!-- diff -->
                <div class="stars">
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                    <span>&#9734;</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
./site.css

body {
    font-family: Arial, Helvetica, sans-serif;
}

.hotels-header h2 {
    padding: 20px;
    text-align: center;
}

.hotels-body {
    margin: auto;
    max-width: 90%;
}

.hotel-item {
    padding: 16px;
    border-radius:2px;
    border:1px solid #9c9c9c;
    display: flex;
    justify-content: space-between;
}

/* diff */
.hotel-name-container {
    max-width: 300px;
}
/* diff */

.hotel-name {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* diff */
.hotel-description-container {
    padding-top: 10px;
    max-width: 300px;
}
/* diff */

.hotel-description {
    font-size: 20px;
    font-weight: 300;
}

/* diff */
.hotel-telephone-container {
    max-width: 250px;
}
/* diff */

.hotel-telephone {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
}

/* diff */
.stars {
    max-width: 100px;
}
/* diff */
