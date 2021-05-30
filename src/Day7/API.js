import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function API() {
	const [ books, setBooks ] = useState([]);
	const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';

	const fetchData = () => {
		fetch(apiURL).then((response) => response.json()).then((data) => setBooks(data));
	};

	return (
		<div className="App">
			<h1>Game of Thrones Books</h1>
			<h2>Fetch a list from an API and display it</h2>

			{/* Fetch data from API */}

			<div>
				<button className="fetch-button" onClick={fetchData}>
					Fetch Data
				</button>
				<br />
			</div>

			{/* Display data from API */}
			<div className="books">
				{books.map((book, index) => {
					const releasedDate = new Date(book.released).toDateString();
					return (
						<div className="book" key={book.isbn}>
							<h3>Book {index + 1}</h3>
							<h2>{book.name}</h2>

							<div className="details">
								<p>👨: {book.authors}</p>
								<p>📖: {book.numberOfPages}</p>
								<p>🏘️: {book.country}</p>
								<p>⏰: {releasedDate}</p>
							</div>
						</div>
					);
				})}
			</div>

			<ScotchInfoBar seriesNumber="7" />
		</div>
	);
}

export default API;
