let hoteles = {
  Bali: {
    name: "Bali",
    location: "Benidorm",
    img:
      "https://t-cf.bstatic.com/xdata/images/hotel/square200/85396338.webp?k=ca2b3c8ce4819f7526dc502ea9b5fbd6bb6c33e1d846c7504ee5e4e5b04254ed&o=",
  },
  Emperador: {
    name: "Emperador",
    location: "Madrid",
    img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/40/83/40838_v11.jpeg"
  },
};

let selectedHotel = prompt("Escribe el nombre del hotel a puntuar: Bali o Emperador");

document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

let rating = prompt("Puntuación del hotel, del 1 al 5");

let stars = {
  1:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

document.getElementById("rating").innerHTML = stars[rating] + " estrellas";

let anonymous = confirm("¿Desea que su reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;