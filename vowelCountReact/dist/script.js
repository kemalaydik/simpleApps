'use strict';
const { useState, useEffect } = React;
console.log(2);

function App() {
	const [count, setCount] = useState(0);
	const vowels = 'aeıioöuü';

	return (
		<div className='flex items-center justify-center h-screen bg-gradient-to-r from-green-300 via-red-500 to-green-600'>
			<div className='relative'>
				<input
					onChange={e => vowels.includes(e.target.value.slice(-1)) && setCount(count + 1)}
					type='text'
					id='first_name'
					className='p-4 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
					placeholder='vowelCount'
					required
				/>
				<span class='absolute -top-3 -right-4 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>{count}</span>
			</div>
		</div>
	);
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
