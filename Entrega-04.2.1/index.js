let operando = 0;
let resultParcial = 0;
let operador = "";

function capturaNum(inputId) {
    return parseInt(document.getElementById(inputId).value);
}

function limpiar() {
    document.getElementById("inputA").value = "";
}

function actualizaResultParcial(operadorTemp) {
    switch (operadorTemp) {
        case "+":
            resultParcial += operando;
            break;
        case "-":
            resultParcial = resultParcial - operando;
            break;
        case "*":
            resultParcial = resultParcial * operando;
            break;
        case "/":
            resultParcial = resultParcial / operando;
            break;
    }
}

function suma() {
    if (isNaN(capturaNum("inputA"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operando = capturaNum("inputA");
        operador = "+";
        actualizaResultParcial(operador);
        limpiar();
        console.log(operador);
        console.log(operando);
        console.log(resultParcial);
        document.getElementById("inputResult").value = resultParcial;
    }
};

function multiplicacion() {
    if (isNaN(capturaNum("inputA"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operando = capturaNum("inputA");
        operador = "*";
        actualizaResultParcial(operador);
        limpiar();
        console.log(operador);
        console.log(operando);
        console.log(resultParcial);
        document.getElementById("inputResult").value = resultParcial;
    }
};

function resta() {
    if (isNaN(capturaNum("inputA"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operando = capturaNum("inputA");
        operador = "-";
        actualizaResultParcial(operador);
        limpiar();
        console.log(operador);
        console.log(operando);
        console.log(resultParcial);
        document.getElementById("inputResult").value = resultParcial;
    }
};

function division() {
    if (isNaN(capturaNum("inputA"))) {
        alert("Campo vacío, introduzca un número");
    } else {
        operando = capturaNum("inputA");
        operador = "/";
        actualizaResultParcial(operador);
        limpiar();
        console.log(operador);
        console.log(operando);
        console.log(resultParcial);
        document.getElementById("inputResult").value = resultParcial;
    }
};

function igual() {
    operando = capturaNum("inputA");
    actualizaResultParcial(operador);
    document.getElementById("inputResult").value = resultParcial;
    console.log(operador);
    console.log(operando);
    console.log(resultParcial);
}

document.getElementById("sumBtn").addEventListener("click", suma);
document.getElementById("resBtn").addEventListener("click", resta);
document.getElementById("mulBtn").addEventListener("click", multiplicacion);
document.getElementById("divBtn").addEventListener("click", division);
document.getElementById("igualBtn").addEventListener("click", igual);