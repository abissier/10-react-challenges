import React from 'react';
import './styles.css';
import ScotchInfoBar from './ScotchInfoBar';

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from './users-data';

/**
 * Our React component where we display data
 * -----------------------------
 */
function LoopOverArray() {
	return (
		<div className="App">
			<div className="page-deets">
				<h2>Loop Over an Array of Data</h2>
			</div>

			<div className="users">
				{users.map((user, index) => (
					<div key={index}>
						<p>{user.name}</p>
						<p>{user.location}</p>
						<p>{user.car}</p>
					</div>
				))}
			</div>
			<ScotchInfoBar />
		</div>
	);
}

export default LoopOverArray;
