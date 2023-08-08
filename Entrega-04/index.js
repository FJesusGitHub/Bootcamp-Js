let numA = document.getElementById("inputA")
let numB = document.getElementById("inputB")



function sumar() {
    let resultado = numA.value !== "" && numB.value !== "" ? parseInt(numA.value) + parseInt(numB.value) : "Error";
    console.log(resultado)
    document.getElementById("inputResult").value = resultado;
};

function restar() {
    let resultado = numA.value !== "" && numB.value !== "" ? parseInt(numA.value) - parseInt(numB.value) : "Error";
    document.getElementById("inputResult").value = resultado;
};

function multiplicar() {
    let resultado = numA.value !== "" && numB.value !== "" ? parseInt(numA.value) * parseInt(numB.value) : "Error";
    document.getElementById("inputResult").value = resultado;
};

function dividir() {
    let resultado = numA.value !== "" && numB.value !== "" ? parseInt(numA.value) / parseInt(numB.value) : "Error";
    document.getElementById("inputResult").value = resultado;
};


document.getElementById("sumButton").addEventListener("click", () => sumar());
document.getElementById("resButton").addEventListener("click", () => restar());
document.getElementById("mulButton").addEventListener("click", () => multiplicar());
document.getElementById("divButton").addEventListener("click", () => dividir());
