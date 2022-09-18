/*
    Author: Anderson Henrique de Queiroz
    Year: 2022
*/

const darkmode = document.getElementById('darkmode');
const lightmode = document.getElementById('lightmode');
var firstInput = document.querySelector('#firstInput');
var secondInput = document.querySelector('#secondInput');
var resultOutput = document.querySelector('#resultOutput');

darkmode.addEventListener("click", () => {      /* ATIVA O DARK-MODE */
    document.body.classList.add('darkmode');
});

/* FUTURAMENTE PODERÁ SER INSERIDO NESTE SCRIPT O LOCAL STORAGE PARA SALVAR A PREFERÊNCIA DE TEMA DO USUÁRIO */

lightmode.addEventListener("click", () => {     /* RESETA PARA O LIGHT-MODE */
    window.location.reload();
});

/* ABAIXO ESTÃO AS FUNÇÕES (DAS OPERAÇÕES MATEMÁTICAS) REALIZADAS PELO SCRIPT */
function somar() {
    resultOutput.innerHTML = parseInt(firstInput.value) + parseInt(secondInput.value);
}

function subtrair() {
    resultOutput.innerHTML = parseInt(firstInput.value) - parseInt(secondInput.value);
}

function multiplicar() {
    resultOutput.innerHTML = parseInt(firstInput.value) * parseInt(secondInput.value);
}

function dividir() {
    resultOutput.innerHTML = parseInt(firstInput.value) / parseInt(secondInput.value);
}

function limpar() {
    firstInput.value = null;
    secondInput.value = null;
    resultOutput.value = ' '; // Caractere ALT + 255 = Espaço
}