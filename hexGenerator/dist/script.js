const resetBtn = document.querySelector('.btn-reset');
const inp = document.querySelector('input');

const generateRndHex = () => Math.floor(Math.random() * 16777215).toString(16);

(function init() {
	inp.value = '000';
	resetBtn.addEventListener('click', () => {
		const hex = generateRndHex();
		document.body.style.backgroundColor = '#' + hex;
		inp.value = hex;
	});
})();
