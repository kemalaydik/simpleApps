'use strict';
const { useState, useEffect } = React;

function App() {
	const [count, setCount] = useState('000');
	function rndHex() {
		const hex = Math.floor(Math.random() * 16777215).toString(16);
		setCount(hex);
		document.body.style.backgroundColor = '#' + hex;
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='flex flex-col items-center gap-2 w-96 max-w-xl bg-blue-500 p-4 rounded-xl border-2 border-gray-900'>
				<h1 className='text-white text-2xl font-bold'>RandomHexGenerator</h1>
				<input type='text' value={count} className='bg-transparent text-white text-center text-5xl border-none outline-0' disabled />
				<hr className='border-2 border-white hover:border-red-500 duration-500 w-full mb-2' />
				<button onClick={() => rndHex()} className='btn-reset block bg-white rounded-sm px-4 py-2 font-bold'>
					<i className='fa-solid fa-spinner mr-2'></i>Generate
				</button>
			</div>
		</div>
	);
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
