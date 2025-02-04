const phoneInput = document.querySelectorAll('.phone');

phoneInput.forEach(item => {
	item.addEventListener('input', function (e) {
		let val = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы

		// Если инпут пуст, очищаем поле
		if (!val) {
			e.target.value = '';
			return;
		}

		// Ограничиваем длину номера до 12 цифр
		val = val.substring(0, 12);

		// Формируем строку с маской
		let formatted = '(+996)';

		if (val.length > 3) formatted += ' ' + val.slice(3, 6);
		if (val.length > 6) formatted += ' ' + val.slice(6, 9);
		if (val.length > 9) formatted += ' ' + val.slice(9, 12);

		e.target.value = formatted;
	});
});

// Убираем форматирование при фокусе, чтобы удобно редактировать
// phoneInput.forEach(item => {
// 	item.addEventListener('focus', function () {
// 		if (item.value === '(+996)') {
// 			item.value = '';
// 		}
// 	});
// });

// Если инпут пустой, при потере фокуса ставим стандартную маску
phoneInput.forEach(item => {
	item.addEventListener('blur', function () {
		if (item.value === '(+996)') {
			item.value = '';
		}
	});
});
