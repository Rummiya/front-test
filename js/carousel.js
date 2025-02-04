const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function updateCarousel() {
	items.forEach((item, index) => {
		let isFirst = index === 0;
		let isLast = index === items.length - 1;
		let offset = index - currentIndex;

		if (currentIndex === 0) {
			if (isLast) {
				offset = -1;
			}
		} else if (currentIndex === items.length - 1) {
			if (isFirst) {
				offset = 1;
			}
		}

		item.style.transform = `translateX(${offset * 80}%) scale(${
			offset === 0 ? 1 : 0.8
		})`;
		item.style.opacity = offset === 0 ? 1 : 0.5;
		item.style.zIndex = offset === 0 ? 10 : 1;
	});
}

document.querySelector('.next').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % items.length;
	updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + items.length) % items.length;
	updateCarousel();
});

updateCarousel();
