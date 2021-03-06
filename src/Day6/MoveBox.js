import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function MoveBox() {
	const [ boxlocation, setBoxLocation ] = useState(300);

	return (
		<div className="App">
			<h1>Move the Box!</h1>

			{/* handle the click event on this button */}
			<button onClick={() => setBoxLocation(boxlocation - 50)}>👆 Move Up 👆</button>

			{/* move this box using inline styles */}
			<div
				className="box"
				style={{
					transform: `translateY(${boxlocation}px)`
				}}
			/>

			<ScotchInfoBar />
		</div>
	);
}

export default MoveBox;
