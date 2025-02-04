const items = document.querySelectorAll('.carousel-item');

// Индекс текущего элемента
let currentIndex = 0;

// Функция обновления карусели
function updateCarousel() {
	items.forEach((item, index) => {
		// Проверяем, является ли текущий элемент первым или последним
		let isFirst = index === 0;
		let isLast = index === items.length - 1;

		// Вычисляем смещение элемента относительно текущего элемента
		let offset = index - currentIndex;

		// Если текущий элемент первый и мы пытаемся перейти на предыдущий элемент
		if (currentIndex === 0) {
			if (isLast) {
				offset = -1;
			}
		} else if (currentIndex === items.length - 1) {
			if (isFirst) {
				offset = 1;
			}
		}

		// Применяем стили к элементу
		item.style.transform = `translateX(${offset * 80}%) scale(${
			offset === 0 ? 1 : 0.8
		})`;
		item.style.opacity = offset === 0 ? 1 : 0.5;
		item.style.zIndex = offset === 0 ? 10 : 1;
	});
}

// Обработчики событий для кнопок "Вперед" и "Назад"
document.querySelector('.next').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % items.length;
	updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + items.length) % items.length;
	updateCarousel();
});

// Инициализация карусели
updateCarousel();
