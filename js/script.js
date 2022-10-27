'use strict';

let taskBD = {
	base: [
		"Сходить в магазин",
		"Выкинуть мусор",
		"Полить цветы",
		"Приготовить обед"
	]
};

let taskList = document.querySelector('.list__lines');

//Очистим список
	taskList.innerHTML = "";

//Сортировка списка задач в Базе по алфавиту
taskBD.base.sort();

//Выводим на экран список задач из Базы
taskBD.base.forEach((item, i) => {
	taskList.innerHTML += `
			<li class="line"> <input type="checkbox"> ${i + 1}. ${item}
				<div class="delete"><img src="/icons/cross-with-circle.svg" alt="img"class="icon_delete"></div>
			</li>
		`;
});
