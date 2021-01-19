// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

let counterValue = 0;
let counterValueInner = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action=decrement]');
// console.log(decrementBtn)
const incrementBtn = document.querySelector('[data-action=increment]');

// console.log(counterValueInner)
const decrement = () => { 
  counterValue -= 1;
  counterValueInner.textContent = counterValue;
};
const increment = () => { 
  counterValue += 1;
  counterValueInner.textContent = counterValue;
};



decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
