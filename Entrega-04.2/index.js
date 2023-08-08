let num = document.getElementById("inputA");
let acum = 0;


function sumar() {
let resultado = acum + num

};

function restar() {
    let resultado =parseInt(numA.value) - parseInt(numB.value)
    document.getElementById("inputResult").value = resultado;
};

function multiplicar() {
    let resultado =parseInt(numA.value) * parseInt(numB.value)
    document.getElementById("inputResult").value = resultado;
};

function dividir() {
    let resultado =parseInt(numA.value) / parseInt(numB.value)
    document.getElementById("inputResult").value = resultado;
};


document.getElementById("sumButton").addEventListener("click", () => sumar());
document.getElementById("resButton").addEventListener("click", () => restar());
document.getElementById("mulButton").addEventListener("click", () => multiplicar());
document.getElementById("divButton").addEventListener("click", () => dividir());
