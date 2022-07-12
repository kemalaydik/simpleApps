const addBtn = document.querySelector('.btn-add');
const resetBtn = document.querySelector('.btn-reset');
const removeBtn = document.querySelector('.btn-subtract');
const inp = document.querySelector('input');

(function init() {
	inp.value = 0;
	addBtn.addEventListener('click', () => (inp.value = +inp.value + 1));
	resetBtn.addEventListener('click', () => (inp.value = 0));
	removeBtn.addEventListener('click', () => {
		if (inp.value === '0') return;
		inp.value = +inp.value - 1;
	});
})();
