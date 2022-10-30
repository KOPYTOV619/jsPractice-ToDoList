'use strict';

document.addEventListener('DOMContentLoaded', () => {

	let taskBD = {
		base: []
	};

	let taskList = document.querySelector('.list__lines'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.add__input');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault(); // Отключаем стандартное поведение браузера
		let newLine = addInput.value; // Проверяем, что ввел пользователь

		if (newLine) {
			taskBD.base.push(newLine); // Добавляем новую задачу в БД
			sortList(taskBD.base); // Сортировка списка задач в БД после добавления новой задачи 
			createNewLine(taskBD.base, taskList); // Создаем новую задачу
		}

		event.target.reset(); // Очищаем форму после нажатия кнопки
	});

	// Сортировка списка задач в Базе по алфавиту
	let sortList = (array) => {
		array.sort();
	};

	sortList(taskBD.base);

	// Создаем новую задачу
	let createNewLine = (lists, parent) => {
		sortList(taskBD.base);
		parent.innerHTML = ""; // Очистим список

		// Выводим на экран список задач из Базы
		lists.forEach((item, i) => {
			parent.innerHTML += `
			<li class="list__lines-item ">
				<div class="list__lines-content">
					<input class="checkbox" type="checkbox">${i + 1}. ${item}
				</div>
				<div class="delete"></div>
			</li>
			<span class="list__lines-span"></span>
		`;
		});
		// Удаляем строку при клике на крестик
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				taskBD.base.splice(i, 1);
				createNewLine(lists, parent);
			});
		});
		// Меняем состояние строки в зависимости от состояния чекбокса
		document.querySelectorAll('input.checkbox').forEach((item) => {
			item.addEventListener('click', () => {
				if (item.checked) {
					item.parentElement.classList.add('ready');
				} else {
					item.parentElement.classList.remove('ready');
				}
			});
		});
	};

	createNewLine(taskBD.base, taskList);

});