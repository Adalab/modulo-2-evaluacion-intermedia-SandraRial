'use strict';


const selectOption = document.querySelector('.js_select');
const inputMoney = document.querySelector('.js_input');
const btn = document.querySelector('.js_btn');
const messageElement = document.querySelector('.js_msg');
const moneyLeftContainer = document.querySelector('.js_left');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleClickBtn (event) {
    event.preventDefault();
    const userNumber = parseInt(selectOption.value);
    const computerNumber = getRandomNumber(6);
    if( userNumber === computerNumber ) {
        messageElement.innerHTML = 'Has ganado el doble de lo apostado :)';
    }
    else {
       messageElement.innerHTML = 'Has perdido lo apostado :(';
    }
}

btn.addEventListener('click', handleClickBtn);




// BONUS

function balance () {
    moneyLeft <= parseInt(inputMoney.value);
    //Actualizar el saldo, si gana o pierde

}