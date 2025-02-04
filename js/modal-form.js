const openBtn = document.querySelector('.modal-open-button');
const closeBtn = document.querySelector('.modal-close-button');
const modalBg = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal-form');

openBtn.addEventListener('click', () => {
	modalBg.style.visibility = 'visible';
	modal.style.transform = ' translateY(0%)';
	modal.style.opacity = 1;
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeModal);
modalBg.addEventListener('click', closeModal);

function closeModal() {
	modal.style.transform = 'translateY(-120%)';
	document.body.style.overflow = 'auto';
	setTimeout(() => {
		modal.style.opacity = 0;
		modalBg.style.visibility = 'hidden';
	}, 200);
}
