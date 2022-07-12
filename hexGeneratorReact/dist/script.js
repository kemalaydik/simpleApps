'use strict';
const { useState } = React;

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='flex flex-col items-center gap-2 w-96 max-w-xl bg-blue-500 p-4 rounded-xl'>
				<h1 className='text-white text-2xl font-bold'>Counter App</h1>
				<input type='text' value={count} className='bg-transparent text-white text-center text-5xl border-none outline-0' disabled />
				<hr className='border-2 border-white hover:border-red-500 duration-500 w-full mb-2' />
				<div className='flex w-full justify-between'>
					<button onClick={() => setCount(count === 0 ? 0 : count - 1)} className='btn-subtract block bg-red-500 rounded-sm px-4 py-2 text-white font-bold'>
						<i className='fa-solid fa-angles-down text-white mr-2'></i>Subtract
					</button>
					<button onClick={() => setCount(0)} className='btn-reset block bg-white rounded-sm px-4 py-2 font-bold'>
						<i className='fa-solid fa-spinner mr-2'></i>Reset
					</button>
					<button onClick={() => setCount(count + 1)} className='btn-add block bg-green-500 rounded-sm px-4 py-2 text-white font-bold'>
						<i className='fa-solid fa-angles-up mr-2 text-white'></i>Add
					</button>
				</div>
			</div>
		</div>
	);
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
