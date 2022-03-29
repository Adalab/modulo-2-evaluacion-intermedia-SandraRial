'use strict';

//Elementos que necesitamos del HTML

const selectOption = document.querySelector('.js_select');
const inputMoney = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const moneyLeft = document.querySelector('.js_left');
const msg = document.querySelector('.js_span');

// Declarar funciones y eventos

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


function handleClickBtn (event) {
    event.preventDefault();
//Obetener el número de la usuaria
const userNumber = selectOption.value;


//Obtener el número del ordenador
const computerNumber = getRandomNumber(6);


//Insertar el condicional dependiendo de si es el mismo número, o no
    if( userNumber === computerNumber ) {
        // Si es el mismo número que imprima has ganado
        msg.innerHTML('Has ganado el doble de lo apostado :)');
    }
    else {
        // Si no es el mismo número que imprima Has perdido
       msg.innerHTML('Has perdido lo apostado :(');
    }
}


//Código que se ejecuta con evento del botón

btn.addEventListener('click', handleClickBtn);