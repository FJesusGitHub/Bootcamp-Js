//ENIGMA//


let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ñ";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ñ";
let textA = document.getElementById("encrypted");
let textB = document.getElementById("decrypted");


function transformadora(plainAlphabet, encryptedAlphabet, textoTransformar, id) {

    let buscarIndice = (alphabet, letra) => {
        return alphabet.indexOf(letra)
    };

    let transformarLetra = letra => {
        let indiceLetra = buscarIndice(plainAlphabet, letra);
        let letraTransformada = encryptedAlphabet[indiceLetra];
        return letraTransformada;
    };

    let transformarMensaje = mensaje => {
        let mensajeMinuscula = mensaje.toLowerCase();
        let resultado = "";
        for (let letra of mensajeMinuscula) {
            resultado += transformarLetra(letra);
        };
        return resultado;
    };

    let textoTransformado = transformarMensaje(textoTransformar);

    document.getElementById(id).value = textoTransformado;
};



document.getElementById("encryptButton").addEventListener("click", () => transformadora(plainAlphabet, encryptedAlphabet, textB.value, "encrypted"));

document.getElementById("decryptButton").addEventListener("click", () => transformadora(encryptedAlphabet, plainAlphabet, textA.value, "decrypted"));




//GENERADOR ALEATORIO//

function randomPick(n, min, max) {
    let results = [];

    while (results.length < n) {
        let x = Math.floor(Math.random() * (max - min + 1) + min);
        if (!existeNum(results, x)) {
            results.push(x);
            results.sort((a, b) => a - b);
        };
    };
    console.log(results);
};

function existeNum(array, n) {
    for (i = 0; i <= array.length; i++) {
        if (array[i] === n) {
            return true
        }
    }
    return false
};

randomPick(20, 1, 100);

