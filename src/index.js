import React from 'react';
import ReactDOM from 'react-dom';
// import DisplayData from './Day1/DisplayData';
import LoopOverArray from './Day2/LoopOverArray';

function App() {
	return (
		<div>
			{/* <DisplayData />; */}
			<LoopOverArray />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
