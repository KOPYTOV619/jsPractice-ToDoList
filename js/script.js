'use strict';

let taskBD = {
	base: [
		"Сходить в магазин",
		"Выкинуть мусор и покормить двух котов",
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
			<li class="list__lines-item">
				<div class="list__lines-content">
					<input class="checkbox" type="checkbox">
					${i + 1}. ${item}
				</div>
				<div class="delete"></div>
			</li>
			<span class="list__lines-span"></span>
		`;
});
