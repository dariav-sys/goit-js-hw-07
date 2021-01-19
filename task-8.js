// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

// const amount = document.querySelector('[type="number"]');


const create = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', createCollection);
destroy.addEventListener('click', destroyBoxes);



function createCollection() {
  const amount = document.querySelector('input').value;
  // console.log(document.querySelector('input').value)
  createBoxes(amount);
}

function createBoxes(amount) {
  const firstBoxSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    boxes.append(div);
    const nextSize = firstBoxSize + i * 10;
    // const random = Math.round(Math.random() * 256);
    div.style.cssText = `width: ${nextSize}px; height: ${nextSize}px;   
  background-color: rgba( ${Math.round(Math.random() * 256)} , ${Math.round(Math.random() * 256)} , ${Math.round(Math.random() * 256)})`;
  };
  console.log(boxes);
};

function destroyBoxes() {
  boxes.innerHTML = '';
}



