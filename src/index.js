import React from 'react';
import ReactDOM from 'react-dom';
// import DisplayData from './Day1/DisplayData';
// import LoopOverArray from './Day2/LoopOverArray';
// import UpdateDOM from './Day3/UpdateDOM';
// import Alert from './Day4/Alert';
// import Calculator from './Day5/Calculator';
import MoveBox from './Day6/MoveBox';

function App() {
	return (
		<div>
			{/* <DisplayData />; */}
			{/* <LoopOverArray /> */}
			{/* <UpdateDOM /> */}
			{/* <Alert /> */}
			{/* <Calculator /> */}
			<MoveBox />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
