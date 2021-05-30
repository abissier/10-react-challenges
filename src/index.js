import React from 'react';
import ReactDOM from 'react-dom';
// import DisplayData from './Day1/DisplayData';
// import LoopOverArray from './Day2/LoopOverArray';
// import UpdateDOM from './Day3/UpdateDOM';
// import Alert from './Day4/Alert';
// import Calculator from './Day5/Calculator';
// import MoveBox from './Day6/MoveBox';
import API from './Day7/API';

function App() {
	return (
		<div>
			{/* <DisplayData />; */}
			{/* <LoopOverArray /> */}
			{/* <UpdateDOM /> */}
			{/* <Alert /> */}
			{/* <Calculator /> */}
			{/* <MoveBox /> */}
			<API />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
