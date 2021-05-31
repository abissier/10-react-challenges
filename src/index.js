import React from 'react';
import ReactDOM from 'react-dom';
// import DisplayData from './Day1/DisplayData';
// import LoopOverArray from './Day2/LoopOverArray';
// import UpdateDOM from './Day3/UpdateDOM';
// import Alert from './Day4/Alert';
// import Calculator from './Day5/Calculator';
// import MoveBox from './Day6/MoveBox';
// import API from './Day7/API';
import ScotchInfoBar from './Day8/ScotchInfoBar';
import StatCard from './Day8/StatCard';

function App() {
	return (
		<div>
			{/* <DisplayData />; */}
			{/* <LoopOverArray /> */}
			{/* <UpdateDOM /> */}
			{/* <Alert /> */}
			{/* <Calculator /> */}
			{/* <MoveBox /> */}
			{/* <API /> */}
			<div className="App">
				<h2>Use components and props in React</h2>
				{/* Use child component x4 here */}
				<StatCard icon="👉" label="Points" number={3000} />
				<StatCard icon="⚡" label="Lightnings" number={6540} />
				<StatCard icon="🤙" label="Shakas" number={337010} />
				<StatCard icon="💎" label="Diamonds" number={98661} />

				<ScotchInfoBar seriesNumber={4} />
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
