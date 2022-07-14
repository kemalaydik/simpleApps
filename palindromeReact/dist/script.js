'use strict';
const { useState, useEffect } = React;

function App() {
	const [text, setText] = useState('');

	function isPalindrome(str) {
		const mid = ~~(str.length / 2);
		const end = str.length - 1;
		for (let i = 0; i < mid; i++) {
			if (str[i].toLowerCase() === str[end - i].toLowerCase()) return false;
		}
		return true;
	}

	return (
		<div
			className={
				'flex items-center justify-center h-screen ' + (isPalindrome(text) ? 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' : 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500')
			}>
			<input
				onChange={e => setText(e.target.value)}
				type='text'
				id='first_name'
				className='p-4 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
				placeholder='isPalindrome'
				required
			/>
		</div>
	);
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
