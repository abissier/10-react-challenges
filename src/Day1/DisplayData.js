import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

/**
 * Our data
 * ------------------------
 */
const user = {
	name: 'Chris on Code',
	location: 'Las Vegas',
	foodType: 'Everything',
	age: 28,
	likes: 'Coding into the wee hours of the morning',
	twitterUsername: 'chrisoncode',
	avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

/**
 * Our React component where we should display data
 * ------------------------
 */

function DisplayData() {
	return (
		<div className="App">
			<div className="user-deets">
				<img alt={user.name} src={user.avatar} />
				<a href={`https://twitter.com/${user.twitterUsername}`}>
					<h3>{user.name}</h3>
				</a>
				<p>
					<strong>Location</strong>
					{user.location}
				</p>
				<p>
					<strong>Eats</strong>
					{user.foodType}
				</p>
				<p>
					<strong>Age</strong>
					{user.age}
				</p>
				<p>
					<strong>Likes</strong>

					{user.likes}
				</p>
				<p>
					<strong>Twitter</strong>
					<a href={`https://twitter.com/${user.twitterUsername}`}>@{user.twitterUsername}</a>
				</p>
			</div>
			<ScotchInfoBar />
		</div>
	);
}

export default DisplayData;
