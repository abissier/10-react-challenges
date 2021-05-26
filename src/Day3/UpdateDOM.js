import React, { useState } from 'react';
import './styles.css';
import ScotchInfoBar from './ScotchInfoBar';

function UpdateDOM() {
	// MOST OF YOUR CODE GOES HERE
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState(38);

	const handleNameInputChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div className="App">
			<div>
				<h2 className="subtitle is-4">Update Data from an input</h2>
			</div>

			{/* Display Data */}
			<div className="input-display">
				<p>Display Name: {name} </p>
				<p>Display Age: {age} </p>
			</div>

			{/* Collect User Inputs */}
			<div className="inputs">
				{/* Input name */}
				<div className="field">
					<label className="label">Name: </label>
					<input
						className="input"
						type="text"
						placeholder="William"
						onChange={handleNameInputChange}
						value={name}
					/>
				</div>

				{/* Input age */}
				<div className="field">
					<label className="label">Age: </label>
					<input
						className="input"
						type="number"
						placeholder="38"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</div>
			</div>
			<ScotchInfoBar seriesNumber="3" />
		</div>
	);
}

export default UpdateDOM;
