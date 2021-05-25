import React from 'react';
import ReactDOM from 'react-dom';
import DisplayData from './DisplayData';
import './styles.css';

function App() {
	return <DisplayData />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
