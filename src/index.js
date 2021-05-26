import React from 'react';
import ReactDOM from 'react-dom';
// import DisplayData from './Day1/DisplayData';
// import LoopOverArray from './Day2/LoopOverArray';
import UpdateDOM from './Day3/UpdateDOM';

function App() {
	return (
		<div>
			{/* <DisplayData />; */}
			{/* <LoopOverArray /> */}
			<UpdateDOM />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
