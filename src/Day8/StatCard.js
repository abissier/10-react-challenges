import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

// Create child Statcard component here
function StatCard(props) {
	return (
		<div className="stat-card">
			<div className="stat-line">
				<span>
					{props.icon}
					{props.label}
				</span>
			</div>
			<p>{props.number.toLocaleString()}</p>
		</div>
	);
}

export default StatCard;
