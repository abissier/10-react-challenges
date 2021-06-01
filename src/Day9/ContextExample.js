import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import Name from './Name';
import Location from './Location';
import UserForm from './UserForm';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function ContextExample() {
	return (
		<UserProvider>
			<div className="App">
				<h2 className="is-size-4">
					We'll use the React Context API to pass and receive data in any component.
				</h2>
				<div className="container">
					<UserForm />

					<h2 className="is-size-4">Display User Info Here 👇</h2>
					<p>These two children components will receive data. These could be nested components.</p>
					<Name />
					<Location />
				</div>
				<ScotchInfoBar />
			</div>
		</UserProvider>
	);
}

export default ContextExample;
