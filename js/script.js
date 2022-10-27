'use strict';

document.addEventListener('DOMContentLoaded', () => {

	let taskBD = {
		base: [
			"Сходить в магазин",
			"Выкинуть мусор и покормить двух котов",
			"Полить цветы",
			"Приготовить обед"
		]
	};

	let taskList = document.querySelector('.list__lines'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.add__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault(); // Отключаем стандартное поведение браузера
		let newLine = addInput.value; // Проверяем, что ввел пользователь
		//let ready = checkbox.checked; // Проверяем нажат ли чекбокс
		taskBD.base.push(newLine); // Добавляем новую задачу в БД
		sortList(taskBD.base); // Сортировка списка задач в БД после добавления новой задачи 
		createNewLine(taskBD.base, taskList); // Создаем новую задачу
		event.target.reset(); // Очищаем форму после нажатия кнопки
	});

	// Сортировка списка задач в Базе по алфавиту
	let sortList = (array) => {
		array.sort();
	};

	sortList(taskBD.base);

	// Создаем новую задачу
	let createNewLine = (lists, parent) => {

		parent.innerHTML = ""; // Очистим список

		// Выводим на экран список задач из Базы
		lists.forEach((item, i) => {
			parent.innerHTML += `
			<li class="list__lines-item">
				<div class="list__lines-content">
					<input class="checkbox" type="checkbox">${i + 1}. ${item}
				</div>
				<div class="delete"></div>
			</li>
			<span class="list__lines-span"></span>
		`;
		});
	};

	createNewLine(taskBD.base, taskList);

});