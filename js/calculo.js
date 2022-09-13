/*
    Author: Anderson Henrique de Queiroz
    Year: 2022
*/

var firstInput = document.querySelector('#firstInput');
var secondInput = document.querySelector('#secondInput');
var resultOutput = document.querySelector('#resultOutput');

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
    resultOutput.value = '0';
}